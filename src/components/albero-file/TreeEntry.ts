import { ComponentType } from '@angular/cdk/portal';
import type { Prisma } from '@prisma/client';

export abstract class TreeEntry {
  abstract parent: TreeEntry | null;

  abstract type: string;

  abstract id: string;

  abstract get label(): string;

  abstract get children(): TreeEntry[];

  abstract get isExpandable(): boolean;

  abstract get icon(): string;

  abstract get iconOpen(): string;

  // abstract get contextMenu(): ComponentType<any>;
}

export type TreeHierarchy = Prisma.VestitoGetPayload<{
  include: {
    tessuti: {
      include: {
        trame: {
          include: {
            fili: {
              include: {
                fibre: true;
              };
            };
          };
        };
      };
    };
  };
}>;
