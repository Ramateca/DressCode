import type { Prisma, Trama } from '@prisma/client';
import { TreeEntry, type TreeHierarchy } from './TreeEntry';
import { FiloTreeEntry } from './FiloTreeEntry';
// import { ComponentType } from '@angular/cdk/portal';
// import { TramaContextMenuComponent } from './context-menu/TramaContextMenuComponent';

export class TramaTreeEntry
  extends TreeEntry
  implements
    Prisma.TramaGetPayload<{
      include: {
        fili: {
          include: {
            fibre: true;
          };
        };
      };
    }>
{
  type = 'trama';
  id: string;
  parent: TreeEntry | null;
  title: string;
  tessutoId: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  #fili: TreeHierarchy['tessuti'][number]['trame'][number]['fili'];
  fili: FiloTreeEntry[];

  constructor(trama: TreeHierarchy['tessuti'][number]['trame'][number], parent: TreeEntry | null) {
    super();
    this.id = trama.id;
    this.parent = parent;
    this.title = trama.title;
    this.tessutoId = trama.tessutoId;
    this.order = trama.order;
    this.createdAt = trama.createdAt;
    this.updatedAt = trama.updatedAt;
    this.#fili = trama.fili;
    this.fili = trama.fili.map((filo) => new FiloTreeEntry(filo, this));
  }

  get label(): string {
    return this.title;
  }

  get children(): TreeEntry[] {
    return this.fili;
  }

  get icon(): string {
    return 'heroBars4Solid';
  }

  get iconOpen(): string {
    return 'heroBars4';
  }

  /*
  get contextMenu(): ComponentType<any> {
    return TramaContextMenuComponent;
  }
  */

  get isExpandable(): boolean {
    return true;
  }
}
