import { RequestHandler, Router } from 'express';
import prisma from '../../prisma';
import bcrypt from 'bcryptjs';
import { validateData } from '../secure';
import * as Schemas from '../../../prisma/generated/zod';
import { environment } from '../../environments/environment';

export const isAuthenticated: RequestHandler = async (req, res, next) => {
  try {
    if (req.session.user) {
      if (req.session.update) {
        req.session.update = false;
        const user = await prisma.user.findUnique({
          where: { id: req.session.user.id },
          select: {
            id: true,
            email: true,
            username: true,
            nome: true,
            cognome: true,
            impostazioni: true,
          },
        });
        if (user) {
          req.session.user = user;
        } else {
          req.session.destroy((err) => {
            if (err) {
              res.status(500).json({
                message: 'Errore logout',
                status: 500,
              });
            } else {
              res.clearCookie('session');
              res.redirect('/login');
            }
          });
        }
      }
      return next();
    }

    res.status(401).redirect('/login');
  } catch (err) {
    res.status(500).json({
      message: err instanceof Error ? err.message : 'Errore interno del server',
      status: 500,
      stack: environment.isProd
        ? undefined
        : err instanceof Error
        ? err.stack
        : undefined,
    });
  }
};

const router = Router();

router.get('/me', isAuthenticated, (req, res) => {
  res.send(req.session.user);
});

router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({
        message: 'Errore logout',
        status: 500,
      });
    } else {
      res.clearCookie('session');
      res.redirect('/login');
    }
  });
});

router.post(
  '/register',
  validateData(Schemas.UserCreateInputSchema),
  async (req, res) => {
    try {
      const { email, password, username, nome, cognome } = req.body;

      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
      if (existingUser) {
        res.status(400).json({
          message: 'Email già in uso',
          status: 400,
        });
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          username,
          nome,
          cognome,
          impostazioni: { create: {} },
        },
        select: {
          id: true,
          email: true,
          username: true,
          nome: true,
          cognome: true,
          impostazioni: true,
        },
      });
      req.session.user = user;
      res.send(user);
    } catch (err) {
      res.status(500).json({
        message:
          err instanceof Error ? err.message : 'Errore interno del server',
        status: 500,
        stack: environment.isProd
          ? undefined
          : err instanceof Error
          ? err.stack
          : undefined,
      });
    }
  }
);

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        email: true,
        password: true,
        id: true,
        username: true,
        nome: true,
        cognome: true,
        impostazioni: true,
      },
    });
    if (!user || !(await bcrypt.compare(password, user.password!))) {
      res.status(401).json({
        message: 'Credenziali non valide',
        status: 401,
      });
    } else {
      delete (<Partial<typeof user>>user).password;

      req.session.user = user;
      res.send(user);
    }
  } catch (err) {
    res.status(500).json({
      message: err instanceof Error ? err.message : 'Errore interno del server',
      status: 500,
      stack: environment.isProd
        ? undefined
        : err instanceof Error
        ? err.stack
        : undefined,
    });
  }
});

export { router as auth_router };
