import type { Prisma, Filo } from '@prisma/client';
import { TreeEntry, type TreeHierarchy } from './TreeEntry';
import { FibraTreeEntry } from './FibraTreeEntry';
import { ComponentType } from '@angular/cdk/portal';

export class FiloTreeEntry
  extends TreeEntry
  implements
    Prisma.FiloGetPayload<{
      include: {
        fibre: true;
      };
    }>
{
  type = 'filo';
  id: string;
  parent: TreeEntry | null;
  title: string;
  tramaId: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  #fibre: TreeHierarchy['tessuti'][number]['trame'][number]['fili'][number]['fibre'];
  fibre: FibraTreeEntry[];

  constructor(
    filo: TreeHierarchy['tessuti'][number]['trame'][number]['fili'][number],
    parent: TreeEntry | null
  ) {
    super();
    this.id = filo.id;
    this.parent = parent;
    this.title = filo.title;
    this.tramaId = filo.tramaId;
    this.order = filo.order;
    this.createdAt = filo.createdAt;
    this.updatedAt = filo.updatedAt;
    this.description = filo.description;
    this.#fibre = filo.fibre;
    this.fibre = (filo.fibre ?? []).map((fibra) => new FibraTreeEntry(fibra, this));
  }

  get label(): string {
    return this.title;
  }

  get children(): TreeEntry[] {
    return this.fibre;
  }

  get icon(): string {
    return 'heroRectangleGroupSolid';
  }

  get iconOpen(): string {
    return 'heroRectangleGroup';
  }

  /*
  get contextMenu(): ComponentType<any> {
    return FiloContextMenuComponent;
  }
  */

  get isExpandable(): boolean {
    return true;
  }
}
