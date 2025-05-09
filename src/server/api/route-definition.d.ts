import type { RequestHandler } from 'express';
import type { Prisma } from '@prisma/client';

export type MethodDefinition = {
  middlewares?: RequestHandler[];
  handler: RequestHandler;
};

export type RouteDefinition = {
  [route: string]: {
    middlewares?: RequestHandler[];
    methods?: {
      [method in HttpMethod]?: MethodDefinition;
    };
  };
};

export type HttpMethod =
  | 'get'
  | 'post'
  | 'put'
  | 'patch'
  | 'delete'
  | 'head'
  | 'options';

export type GenerateCrudOptionsValue = {
  middlewares?: {
    post?: Array<RequestHandler>;
    put?: Array<RequestHandler>;
    get?: Array<RequestHandler>;
    getId?: Array<RequestHandler>;
    delete?: Array<RequestHandler>;
  };
  authenticate?: true;
};

export type GenerateCrudOptions = {
  [key in Prisma.TypeMap['meta']['modelProps']]?: GenerateCrudOptionsValue;
};
