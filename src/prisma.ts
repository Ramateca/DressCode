import type { PrismaClient as pc } from "@prisma/client";
import { createRequire } from "module";
// @ts-ignore
const _require = createRequire(import.meta.url);
const { Prisma, PrismaClient } = _require("@prisma/client");

// Types for middleware parameters
type ExtendedVestito = { customTheme: string | object };
type ExtendedFibra = { definizione: string | object };
type ExtendedFormResponse = { data: string | object };

// Create a Prisma client with middleware for handling JSON fields in SQLite
const prisma: pc = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
}).$extends({
  result: {
    vestito: {
      customTheme: {
        needs: { customTheme: true },
        compute(vestito: ExtendedVestito) {
          // Parse the JSON string to object when reading from DB
          return typeof vestito.customTheme === 'string' ?
            JSON.parse(vestito.customTheme) : vestito.customTheme;
        },
      },
    },
    fibra: {
      definizione: {
        needs: { definizione: true },
        compute(fibra: ExtendedFibra) {
          return typeof fibra.definizione === 'string' ?
            JSON.parse(fibra.definizione) : fibra.definizione;
        },
      },
    },
    formResponse: {
      data: {
        needs: { data: true },
        compute(formResponse: ExtendedFormResponse) {
          return typeof formResponse.data === 'string' ?
            JSON.parse(formResponse.data) : formResponse.data;
        },
      },
    },
  },
  query: {
    vestito: {
      create: ({ args, query }: { args: any, query: (args: any) => any }) => {
        if (args.data.customTheme && typeof args.data.customTheme === 'object') {
          args.data.customTheme = JSON.stringify(args.data.customTheme);
        }
        return query(args);
      },
      update: ({ args, query }: { args: any, query: (args: any) => any }) => {
        if (args.data.customTheme && typeof args.data.customTheme === 'object') {
          args.data.customTheme = JSON.stringify(args.data.customTheme);
        }
        return query(args);
      },
      upsert: ({ args, query }: { args: any, query: (args: any) => any }) => {
        if (args.create.customTheme && typeof args.create.customTheme === 'object') {
          args.create.customTheme = JSON.stringify(args.create.customTheme);
        }
        if (args.update.customTheme && typeof args.update.customTheme === 'object') {
          args.update.customTheme = JSON.stringify(args.update.customTheme);
        }
        return query(args);
      },
    },
    fibra: {
      create: ({ args, query }: { args: any, query: (args: any) => any }) => {
        if (args.data.definizione && typeof args.data.definizione === 'object') {
          args.data.definizione = JSON.stringify(args.data.definizione);
        }
        return query(args);
      },
      update: ({ args, query }: { args: any, query: (args: any) => any }) => {
        if (args.data.definizione && typeof args.data.definizione === 'object') {
          args.data.definizione = JSON.stringify(args.data.definizione);
        }
        return query(args);
      },
      upsert: ({ args, query }: { args: any, query: (args: any) => any }) => {
        if (args.create.definizione && typeof args.create.definizione === 'object') {
          args.create.definizione = JSON.stringify(args.create.definizione);
        }
        if (args.update.definizione && typeof args.update.definizione === 'object') {
          args.update.definizione = JSON.stringify(args.update.definizione);
        }
        return query(args);
      },
    },
    formResponse: {
      create: ({ args, query }: { args: any, query: (args: any) => any }) => {
        if (args.data.data && typeof args.data.data === 'object') {
          args.data.data = JSON.stringify(args.data.data);
        }
        return query(args);
      },
      update: ({ args, query }: { args: any, query: (args: any) => any }) => {
        if (args.data.data && typeof args.data.data === 'object') {
          args.data.data = JSON.stringify(args.data.data);
        }
        return query(args);
      },
      upsert: ({ args, query }: { args: any, query: (args: any) => any }) => {
        if (args.create.data && typeof args.create.data === 'object') {
          args.create.data = JSON.stringify(args.create.data);
        }
        if (args.update.data && typeof args.update.data === 'object') {
          args.update.data = JSON.stringify(args.update.data);
        }
        return query(args);
      },
    },
  },
});

export default prisma;
export { Prisma };
