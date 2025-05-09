import { Router } from 'express';
import prisma from '../../prisma';
import type { GenerateCrudOptions, RouteDefinition } from './route-definition';
import { registerRoutes } from '../../shared/shared';
import { isAuthenticated } from '../auth/auth';
import { validateData } from '../secure';
import * as Schemas from '../../../prisma/generated/zod';
import { environment } from '../../environments/environment';

const router = Router();

export function generateCrud(options: GenerateCrudOptions): RouteDefinition {
  const routeDefinition: RouteDefinition = {};

  Object.entries(options).forEach(([key, value]) => {
    const delegate = prisma[<keyof typeof prisma>key];

    if (delegate && typeof delegate === 'object' && 'fields' in delegate) {
      if (value.middlewares?.get || value.middlewares?.post) {
        routeDefinition[`/${key}`] = {
          middlewares: value.authenticate ? [isAuthenticated] : [],
          methods: {},
        };
      }
      if (
        value.middlewares?.getId ||
        value.middlewares?.put ||
        value.middlewares?.delete
      ) {
        routeDefinition[`/${key}/:id`] = {
          middlewares: value.authenticate ? [isAuthenticated] : [],
          methods: {},
        };
      }
      if (value.middlewares?.get) {
        routeDefinition[`/${key}`].methods!.get = {
          middlewares: value.middlewares.get,
          handler: async (req, res) => {
            try {
              // @ts-ignore
              const data = await delegate.findMany({ where: req.query });
              res.json(data);
            } catch (error) {
              console.error(`Error fetching ${key}:`, error);
              res.status(500).json({
                message: `Failed to fetch ${key}`,
                status: 500,
              });
            }
          },
        };
      }
      if (value.middlewares?.post) {
        routeDefinition[`/${key}`].methods!.post = {
          middlewares: value.middlewares.post,
          handler: async (req, res) => {
            try {
              // @ts-ignore
              const data = await delegate.create({ data: req.body });
              res.status(201).json(data);
            } catch (error) {
              console.error(`Error creating ${key}:`, error);
              res.status(500).json({
                message: `Failed to create ${key}`,
                status: 500,
              });
            }
          },
        };
      }
      if (value.middlewares?.getId) {
        routeDefinition[`/${key}/:id`].methods!.get = {
          middlewares: value.middlewares.get,
          handler: async (req, res) => {
            try {
              // @ts-ignore
              const data = await delegate.findUnique({
                where: { id: req.params['id'] },
              });
              if (!data) {
                res.status(404).json({
                  message: `${key} non trovato`,
                  status: 404,
                });
              } else {
                res.json(data);
              }
            } catch (error) {
              console.error(`Error fetching ${key} by ID:`, error);
              res.status(500).json({
                message: `Failed to fetch ${key} by ID`,
                status: 500,
              });
            }
          },
        };
      }
      if (value.middlewares?.put) {
        routeDefinition[`/${key}/:id`].methods!.put = {
          middlewares: value.middlewares?.put ? value.middlewares?.put : [],
          handler: async (req, res) => {
            try {
              // @ts-ignore
              const data = await delegate.update({
                where: { id: req.params['id'] },
                data: req.body,
              });
              res.json(data);
            } catch (error) {
              const status = (error as any).code === 'P2025' ? 404 : 500;
              const message =
                (error as any).code === 'P2025'
                  ? `${key} non trovato`
                  : `Failed to update ${key}`;
              console.error(`Error updating ${key}:`, error);
              res.status(status).json({
                message,
                status,
                code: (error as any).code,
              });
            }
          },
        };
      }
      if (value.middlewares?.delete) {
        routeDefinition[`/${key}/:id`].methods!.delete = {
          middlewares: value.middlewares?.delete
            ? value.middlewares?.delete
            : [],
          handler: async (req, res) => {
            try {
              // @ts-ignore
              await delegate.delete({ where: { id: req.params['id'] } });
              res.status(204).end();
            } catch (error) {
              const status = (error as any).code === 'P2025' ? 404 : 500;
              const message =
                (error as any).code === 'P2025'
                  ? `${key} non trovato`
                  : `Failed to delete ${key}`;
              console.error(`Error deleting ${key}:`, error);
              res.status(status).json({
                message,
                status,
                code: (error as any).code,
              });
            }
          },
        };
      }
    }
  });

  return routeDefinition;
}

const crudOptions: GenerateCrudOptions = {
  user: {
    authenticate: true,
    middlewares: {
      post: [validateData(Schemas.UserCreateInputSchema)],
      put: [validateData(Schemas.UserUpdateInputSchema)],
    },
  },
  vestito: {
    authenticate: true,
    middlewares: {
      get: [
        isAuthenticated,
        (req, res, next) => {
          req.query['userId'] = req.session['user']?.id;
          next();
        },
      ],
      post: [
        isAuthenticated,
        (req, res, next) => {
          req.body['userId'] = req.session['user']?.id;
          next();
        },
      ],
      put: [validateData(Schemas.VestitoUpdateInputSchema)],
    },
  },
  tessuto: {
    authenticate: true,
    middlewares: {
      post: [validateData(Schemas.TessutoCreateInputSchema)],
      put: [validateData(Schemas.TessutoUpdateInputSchema)],
    },
  },
  trama: {
    authenticate: true,
    middlewares: {
      post: [validateData(Schemas.TramaCreateInputSchema)],
      put: [validateData(Schemas.TramaUpdateInputSchema)],
    },
  },
  filo: {
    authenticate: true,
    middlewares: {
      post: [validateData(Schemas.FiloCreateInputSchema)],
      put: [validateData(Schemas.FiloUpdateInputSchema)],
    },
  },
  fibra: {
    authenticate: true,
    middlewares: {
      post: [validateData(Schemas.FibraCreateInputSchema)],
      put: [validateData(Schemas.FibraUpdateInputSchema)],
    },
  },
  media: {
    authenticate: true,
    middlewares: {
      post: [validateData(Schemas.MediaCreateInputSchema)],
      put: [validateData(Schemas.MediaUpdateInputSchema)],
    },
  },
  vote: {
    authenticate: true,
    middlewares: {
      post: [validateData(Schemas.VoteCreateInputSchema)],
    },
  },
  formResponse: {
    authenticate: true,
    middlewares: {
      get: [validateData(Schemas.FormResponseFindManyArgsSchema)],
      post: [validateData(Schemas.FormResponseCreateInputSchema)],
    },
  },
  impostazioni: {
    authenticate: true,
    middlewares: {
      put: [
        (req, res, next) => {
          req.session.update = true;
          next();
        },
        validateData(Schemas.ImpostazioniUpdateInputSchema),
      ],
    },
  },
};

const routes = generateCrud(crudOptions);

registerRoutes(router, routes);

router.get('/vestito/:id', isAuthenticated, async (req, res) => {
  try {
    const vestito = await prisma.vestito.findUnique({
      where: { id: req.params['id'], userId: req.session['user']?.id },
      include: {
        tessuti: {
          include: {
            trame: {
              include: {
                fili: {
                  include: {
                    fibre: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    res.json(vestito);
  } catch (error) {
    res.status(500).json({
      message:
        error instanceof Error
          ? error.message
          : 'Errore interno del server',
      status: 500,
      stack: environment.isProd
        ? undefined
        : error instanceof Error
        ? error.stack
        : undefined,
    });
  }
});

export { router as api_router };
