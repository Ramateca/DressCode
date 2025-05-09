import {
  Component,
  inject,
  input,
  ElementRef,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { TreeEntry } from '../TreeEntry';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroBars4,
  heroPlus,
  heroRectangleGroup,
  heroSquare3Stack3d,
} from '@ng-icons/heroicons/outline';
import {
  heroBars4Solid,
  heroRectangleGroupSolid,
  heroSquare3Stack3dSolid,
  heroStopSolid,
} from '@ng-icons/heroicons/solid';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AlberoManager } from '../albero-manager/albero-manager.directive';

@Component({
  selector: 'dress-albero-file',
  imports: [NgIcon],
  providers: [
    provideIcons({
      heroSquare3Stack3d,
      heroSquare3Stack3dSolid,
      heroRectangleGroup,
      heroRectangleGroupSolid,
      heroBars4,
      heroBars4Solid,
      heroStopSolid,
      heroPlus,
    }),
  ],
  templateUrl: './albero-file.component.html',
  styleUrl: './albero-file.component.css',
})
export class AlberoFileComponent implements OnInit {
  node = input.required<TreeEntry>();
  expanded = false;

  isRenaming = signal(false);
  currentLabel = signal('');

  nameInput = viewChild<ElementRef<HTMLInputElement>>('nameInput');

  overlay = inject(Overlay);

  elementRef = inject(ElementRef);
  nativeElement = this.elementRef.nativeElement;

  manager = inject(AlberoManager);

  ngOnInit() {
    this.manager.register({ node: this.node(), component: this });
  }

  toggle(): void {
    if (this.node().isExpandable) {
      this.expanded = !this.expanded;
    }
  }

  startRename(): void {
    this.currentLabel.set(this.node().label);
    this.isRenaming.set(true);
    setTimeout(() => {
      this.nameInput()?.nativeElement.focus();
      this.nameInput()?.nativeElement.select();
    });
  }

  saveRename(): void {
    if (this.isRenaming()) {
      const newLabel = this.currentLabel();
      if (newLabel && newLabel.trim() !== '') {
        this.manager.rename(this.node(), newLabel.trim());
      }
      this.isRenaming.set(false);
    }
  }

  cancelRename(): void {
    this.isRenaming.set(false);
  }

  contextmenu(event: MouseEvent): void {
    event.preventDefault();
    //const overlayRef = this.overlay.create({
    //  positionStrategy: this.overlay
    //    .position()
    //    .flexibleConnectedTo(this.nativeElement)
    //    .withPositions([
    //      {
    //        originX: 'end',
    //        originY: 'bottom',
    //        overlayX: 'end',
    //        overlayY: 'top',
    //      },
    //    ]),
    //});
    //
    //overlayRef.attach(new ComponentPortal(this.node().contextMenu));
  }

  click(event: MouseEvent): void {
    event.preventDefault();
    this.toggle();
    if (this.node().type === 'fibra' || this.node().type === 'filo') {
      this.manager.open(this.node());
    }
  }

  add(event: MouseEvent) {
    event.preventDefault();
    this.manager.add(this.node());
  }
}
