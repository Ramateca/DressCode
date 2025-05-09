import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express, { RequestHandler } from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { auth_router } from './server/auth/auth';
import { api_router } from './server/api/api';
import session from 'express-session';
import { environment } from './environments/environment';
import type { User } from '@prisma/client';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const Knex = require('knex');
const ConnectSessionKnex = require('connect-session-knex');

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const dbPath = resolve(serverDistFolder, '../../prisma/dresscode.db');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: dbPath
  },
  useNullAsDefault: true
});

const KnexSessionStore = ConnectSessionKnex(session);
const store = new KnexSessionStore({
  knex,
  tablename: 'sessions', // optional, default is 'sessions'
  createtable: true, // if the table doesn't exist, it gets created
});

app.use(
  session({
    secret: environment.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 24 * 365,
      secure: environment.isProd,
      sameSite: 'lax',
    },
    name: 'session',
    store
  })
);

declare module 'express-session' {
  interface SessionData {
    user: Partial<User>;
    update: boolean;
  }
}

const angularApp = new AngularNodeAppEngine();

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

app.use('/auth', auth_router);
app.use('/api', api_router);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req, {
      user: req.session.user,
    })
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next()
    )
    .catch(next);
});

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (err) {
      console.error('Errore intercettato:', err);

      const status = err.status ?? 500;
      const message = err.message ?? 'Errore interno del server';

      res.status(status).json({
        message,
        status,
        stack: environment.isProd ? undefined : err.stack,
      });
    } else {
      next();
    }
  }
);

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] ?? 4000;
  app.listen(Number(port), '0.0.0.0', () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
