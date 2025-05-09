import type { Prisma, Tessuto } from '@prisma/client';
import { TreeEntry, type TreeHierarchy } from './TreeEntry';
import { TramaTreeEntry } from './TramaTreeEntry';
// import { ComponentType } from '@angular/cdk/portal';
// import { TessutoContextMenuComponent } from './context-menu/TessutoContextMenuComponent';

export class TessutoTreeEntry
  extends TreeEntry
  implements
    Prisma.TessutoGetPayload<{
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
    }>
{
  type = 'tessuto';
  id: string;
  parent: TreeEntry | null;
  title: string;
  vestitoId: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  #trame: TreeHierarchy['tessuti'][number]['trame'];
  trame: TramaTreeEntry[];

  constructor(tessuto: TreeHierarchy['tessuti'][number], parent: TreeEntry | null) {
    super();
    this.id = tessuto.id;
    this.parent = parent;
    this.title = tessuto.title;
    this.vestitoId = tessuto.vestitoId;
    this.order = tessuto.order;
    this.createdAt = tessuto.createdAt;
    this.updatedAt = tessuto.updatedAt;
    this.#trame = tessuto.trame;
    this.trame = tessuto.trame.map((trama) => new TramaTreeEntry(trama, this));
  }

  get label(): string {
    return this.title;
  }

  get children(): TreeEntry[] {
    return this.trame;
  }

  get icon(): string {
    return 'heroSquare3Stack3dSolid';
  }

  get iconOpen(): string {
    return 'heroSquare3Stack3d';
  }

  /*
  get contextMenu(): ComponentType<any> {
    return TessutoContextMenuComponent;
  }
  */

  get isExpandable(): boolean {
    return true;
  }

}
