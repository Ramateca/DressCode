import {
  Directive,
  output
} from '@angular/core';
import type { TreeEntry } from '../TreeEntry';
import type { AlberoFileComponent } from '../albero-file/albero-file.component';

type RegistryEntry = {
  node: TreeEntry;
  component: AlberoFileComponent;
}

@Directive({
  selector: '[dress-albero-manager]',
  standalone: true,
})
export class AlberoManager {

  registry = new Map<string, RegistryEntry>();

  regisetred = output<RegistryEntry>();

  register(entry: RegistryEntry) {
    this.registry.set(entry.node.id, entry);
    this.regisetred.emit(entry);
  }

  unregister(entry: RegistryEntry) {
    this.registry.delete(entry.node.id);
  }

  get(id: string) {
    return this.registry.get(id);
  }

  opened = output<RegistryEntry>();

  open(node: TreeEntry) {
    const entry = this.get(node.id);
    if (entry) {
      this.opened.emit(entry);
    }
  }

  adding = output<RegistryEntry>();

  add(node: TreeEntry) {
    const entry = this.get(node.id);
    if (entry) {
      this.adding.emit(entry);
    }
  }

  renamed = output<{ entry: RegistryEntry; newLabel: string }>();

  rename(node: TreeEntry, newLabel: string) {
    const entry = this.get(node.id);
    if (entry) {
      this.renamed.emit({ entry, newLabel });
    }
  }
}
