import type { Prisma, Fibra } from '@prisma/client';
import { TreeEntry, type TreeHierarchy } from './TreeEntry';
import { ComponentType } from '@angular/cdk/portal';

export class FibraTreeEntry
  extends TreeEntry
  implements Prisma.FibraGetPayload<{}>
{
  type = 'fibra';
  id: string;
  parent: TreeEntry | null;
  nome: string;
  definizione: string;
  filoId: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    fibra: TreeHierarchy['tessuti'][number]['trame'][number]['fili'][number]['fibre'][number],
    parent: TreeEntry | null
  ) {
    super();
    this.id = fibra.id;
    this.parent = parent;
    this.nome = fibra.nome;
    this.definizione = fibra.definizione;
    this.filoId = fibra.filoId;
    this.createdAt = fibra.createdAt;
    this.updatedAt = fibra.updatedAt;
  }

  get label(): string {
    return this.nome;
  }

  get children(): TreeEntry[] {
    return [];
  }

  get icon(): string {
    return 'heroStopSolid';
  }

  get iconOpen(): string {
    return 'heroStopSolid';
  }

  /* get contextMenu(): ComponentType<any> {
    return FibraContextMenuComponent;
  } */

  get isExpandable(): boolean {
    return false;
  }
}
