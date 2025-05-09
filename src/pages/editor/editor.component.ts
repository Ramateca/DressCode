import {
  Component,
  inject,
  signal,
  computed,
  linkedSignal,
  effect,
  PLATFORM_ID,
  Injector,
  viewChild,
  ElementRef,
  AfterViewInit,
  Type,
  InjectionToken,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, httpResource } from '@angular/common/http';
import type {
  Prisma,
  Tessuto,
  Trama,
  Filo,
  Vestito,
  Fibra,
} from '@prisma/client';
import { ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { ToastService } from '../../services/toast.service';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser, NgComponentOutlet } from '@angular/common';
import { GlossarioPipe } from '../../pipes/glossario.pipe';
import { TessutoTreeEntry } from '../../components/albero-file/TessutoTreeEntry';
import { AlberoFileComponent } from '../../components/albero-file/albero-file/albero-file.component';
import { AlberoManager } from '../../components/albero-file/albero-manager/albero-manager.directive';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { LoginComponent } from '../login/login.component';
import {
  heroSquare3Stack3d,
  heroRectangleGroup,
  heroBars4,
  heroPlus,
  heroXMark,
} from '@ng-icons/heroicons/outline';
import {
  heroSquare3Stack3dSolid,
  heroRectangleGroupSolid,
  heroBars4Solid,
  heroStopSolid,
} from '@ng-icons/heroicons/solid';
import { FiloTreeEntry } from '../../components/albero-file/FiloTreeEntry';
import { TramaTreeEntry } from '../../components/albero-file/TramaTreeEntry';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FiloComponent } from '../../components/filo/filo.component';

export const ACTIVE_TAB_UUID = new InjectionToken<string>('ACTIVE_TAB_UUID');

type VestitoWithRelations = Prisma.VestitoGetPayload<{
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

interface HttpError {
  message?: string;
  status?: number;
  [key: string]: any;
}

@Component({
  selector: 'dress-editor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    GlossarioPipe,
    AlberoFileComponent,
    AlberoManager,
    NgIcon,
    NgComponentOutlet,
  ],
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
      heroXMark,
    }),
  ],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements AfterViewInit {
  queryParams = toSignal(inject(ActivatedRoute).queryParamMap);
  router = inject(Router);
  http = inject(HttpClient);
  toast = inject(ToastService);
  title = inject(Title);
  injector = inject(Injector);

  isEditingTitle = signal(false);
  currentTitle = signal('');

  titleInput = viewChild<ElementRef<HTMLInputElement>>('titleInput');

  alberoManager = viewChild(AlberoManager);

  openTabs: Tab[] = [];
  activeTab = signal<Tab | null>(null);

  vestitoResource = httpResource<VestitoWithRelations | null>(() => {
    if (!this.queryParams()?.get('id')) return undefined;
    return `/api/vestito/${this.queryParams()?.get('id')}`;
  });

  treeHierarchy = computed(() => {
    const vestito = this.vestito();
    if (!vestito) return { tessuti: [] };
    return {
      tessuti: vestito.tessuti.map((t) => new TessutoTreeEntry(t, null)),
    };
  });

  vestito = linkedSignal(() => {
    const statusCode = this.vestitoResource.statusCode();
    if (statusCode && 200 <= statusCode && statusCode < 300) {
      return this.vestitoResource.value();
    } else {
      return null;
    }
  });

  erroreVestito = computed<HttpError | null>(() => {
    const statusCode = this.vestitoResource.statusCode();
    if (statusCode && 400 <= statusCode && statusCode < 500) {
      return this.vestitoResource.error() as HttpError;
    }
    return null;
  });

  openTabInjector = Injector.create({
    providers: [
      {
        provide: AlberoManager,
        useValue: this.alberoManager(),
      },
    ],
    parent: this.injector,
  });

  constructor() {
    effect(() => {
      const errore = this.erroreVestito();
      if (errore) {
        const message = errore.message || 'Errore nel caricamento del vestito';
        this.toast.error(message, errore.status);
        if (errore.status === 404) {
          this.router.navigate(['/boutique']);
        }
      }
    });
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      effect(() => {
        const vestito = this.vestito();
        if (vestito?.title) {
          this.title.setTitle(vestito.title);
        }
      });
    }
    const e = effect(
      () => {
        const alberoManager = this.alberoManager();
        if (alberoManager) {
          alberoManager.opened.subscribe(({ node }) => {
            this.openTabInjector = Injector.create({
              providers: [
                {
                  provide: ACTIVE_TAB_UUID,
                  useValue: node.id,
                },
                {
                  provide: AlberoManager,
                  useValue: this.alberoManager(),
                },
              ],
              parent: this.injector,
            });
            if (node.type === 'filo') {
              this.openTab({
                id: node.id,
                label: node.label,
                icon: node.icon,
                component: FiloComponent,
              });
            } else if (node.type === 'fibra') {
              if (!node.parent) return;
              this.openTab({
                id: node.parent.id,
                label: node.parent.label,
                icon: node.parent.icon,
                component: FiloComponent,
              });
            }
          });
          alberoManager.renamed.subscribe(({ entry, newLabel }) => {
            switch (entry.node.type) {
              case 'tessuto':
                this.renameTessuto(entry.node.id, newLabel);
                break;
              case 'trama':
                this.renameTrama(entry.node.id, newLabel);
                break;
              case 'filo':
                this.renameFilo(entry.node.id, newLabel);
                break;
              case 'fibra':
                this.renameFibra(entry.node.id, newLabel);
                break;
            }
          });
          alberoManager.adding.subscribe(async ({ node }) => {
            let uuid: string | null = null;
            switch (node.type) {
              case 'tessuto':
                uuid = await this.addTrama(node.id);
                break;
              case 'trama':
                uuid = await this.addFilo(node.id);
                break;
              case 'filo':
                uuid = await this.addFibra(node.id);
                break;
              case 'fibra':
                break;
              default:
            }
            if (uuid) {
              setTimeout(() => {
                const entry = alberoManager.get(uuid);
                if (entry) {
                  entry.component.startRename();
                }
              }, 200);
            }
          });
          e.destroy();
        }
      },
      { manualCleanup: true }
    );
  }

  ngAfterViewInit(): void {}

  refreshVestito(): void {
    const vestitoId = this.queryParams()?.get('id');
    if (!vestitoId) return;

    const currentUrl = `/api/vestito/${vestitoId}`;
    this.http.get<VestitoWithRelations>(currentUrl).subscribe({
      next: (data) => {
        this.vestito.update(() => data);
      },
      error: (err: HttpError) => {
        console.error('Error refreshing vestito:', err);
        this.toast.error(
          err.message || "Errore durante l'aggiornamento dei dati"
        );
      },
    });
  }

  startEditTitle(): void {
    if (!this.vestito()) return;
    this.currentTitle.set(this.vestito()?.title ?? '');
    this.isEditingTitle.set(true);
    const e = effect(
      () => {
        const titleInput = this.titleInput();
        if (titleInput) {
          titleInput.nativeElement.focus();
          e.destroy();
        }
      },
      { manualCleanup: true, injector: this.injector }
    );
  }

  saveTitle(): void {
    if (!this.vestito() || !this.isEditingTitle()) return;
    const updatedTitle = this.currentTitle().trim();
    const originalTitle = this.vestito()?.title;

    if (updatedTitle && updatedTitle !== originalTitle) {
      const vestitoId = this.vestito()?.id;
      this.http
        .put<Vestito>(`/api/vestito/${vestitoId}`, { title: updatedTitle })
        .subscribe({
          next: (updatedVestito) => {
            this.vestito.update((v) =>
              v ? { ...v, title: updatedVestito.title } : null
            );
            this.isEditingTitle.set(false);
          },
          error: (err: HttpError) => {
            console.error('Error updating title:', err);
            this.toast.error(
              err.message ?? "Errore durante l'aggiornamento del titolo"
            );
            this.cancelEditTitle();
          },
        });
    } else {
      this.isEditingTitle.set(false);
    }
  }

  cancelEditTitle(): void {
    this.isEditingTitle.set(false);
  }

  addTessuto(): void {
    const currentVestito = this.vestito();
    if (!currentVestito) return;

    this.http
      .post<Tessuto>('/api/tessuto', {
        title: 'Untitled',
        vestito: {
          connect: {
            id: currentVestito.id,
          },
        },
        order: (currentVestito.tessuti?.length ?? 0) + 1,
      })
      .subscribe({
        complete: () => {
          this.refreshVestito();
        },
        error: (err: HttpError) => {
          console.error('Error adding tessuto:', err);
          this.toast.error(
            err.message ?? "Errore durante l'aggiunta del tessuto"
          );
        },
      });
  }

  addTrama(tessutoId: string) {
    return new Promise<string | null>((resolve) => {
      this.http
        .post<Trama>('/api/trama', {
          title: 'Untitled',
          tessuto: {
            connect: {
              id: tessutoId,
            },
          },
          order:
            (this.vestito()?.tessuti?.find((t) => t.id === tessutoId)?.trame
              ?.length ?? 0) + 1,
        })
        .subscribe({
          next: (trama) => {
            resolve(trama.id);
          },
          complete: () => {
            this.refreshVestito();
          },
          error: (err: HttpError) => {
            console.error('Error adding trama:', err);
            this.toast.error(
              err.message ?? "Errore durante l'aggiunta della trama"
            );
            resolve(null);
          },
        });
    });
  }

  addFilo(tramaId: string) {
    return new Promise<string | null>((resolve) => {
      this.http
        .post<Filo>('/api/filo', {
          title: 'Untitled',
          trama: {
            connect: {
              id: tramaId,
            },
          },
          order: (this.getTrama(tramaId)?.fili?.length ?? 0) + 1,
        })
        .subscribe({
          next: (filo) => {
            resolve(filo.id);
          },
          complete: () => {
            this.refreshVestito();
          },
          error: (err: HttpError) => {
            console.error('Error adding filo:', err);
            this.toast.error(
              err.message ?? "Errore durante l'aggiunta del filo"
            );
            resolve(null);
          },
        });
    });
  }

  addFibra(filoId: string) {
    return new Promise<string | null>((resolve) => {
      this.http
        .post<Fibra>('/api/fibra', {
          nome: 'Untitled',
          filo: {
            connect: {
              id: filoId,
            },
          },
          //order: (this.getFilo(filoId)?.fibre?.length ?? 0) + 1,
        })
        .subscribe({
          next: (fibra) => {
            resolve(fibra.id);
          },
          complete: () => {
            this.refreshVestito();
          },
          error: (err: HttpError) => {
            console.error('Error adding fibra:', err);
            this.toast.error(
              err.message ?? "Errore durante l'aggiunta della fibra"
            );
            resolve(null);
          },
        });
    });
  }

  private getTrama(tramaId: string): TramaTreeEntry | undefined {
    if (!this.vestito()) return undefined;

    const trama = this.alberoManager()?.get(tramaId);
    return trama as TramaTreeEntry | undefined;
  }

  private getFilo(filoId: string): FiloTreeEntry | undefined {
    if (!this.vestito()) return undefined;

    const filo = this.alberoManager()?.get(filoId);
    return filo as FiloTreeEntry | undefined;
  }

  openTab(tab: Tab): void {
    const existingTab = this.openTabs.find((t) => t.id === tab.id);
    if (existingTab) {
      this.activeTab.set(existingTab);
      return;
    }
    this.openTabs.push(tab);
    this.activeTab.set(tab);
  }

  closeTab(tab: Tab): void {
    this.openTabs = this.openTabs.filter((t) => t.id !== tab.id);
    if (this.activeTab()?.id === tab.id) {
      this.activeTab.set(this.openTabs[0] ?? null);
    }
  }

  selectTab(tab: Tab): void {
    this.activeTab.set(tab);
  }

  renameTessuto(tessutoId: string, newLabel: string): void {
    this.http
      .put<Tessuto>(`/api/tessuto/${tessutoId}`, { title: newLabel })
      .subscribe({
        complete: () => {
          this.refreshVestito();
        },
        error: (err: HttpError) => {
          console.error('Error renaming tessuto:', err);
          this.toast.error(
            err.message ?? 'Errore durante il rinominazione del tessuto'
          );
        },
      });
  }

  renameTrama(tramaId: string, newLabel: string): void {
    this.http
      .put<Trama>(`/api/trama/${tramaId}`, { title: newLabel })
      .subscribe({
        complete: () => {
          this.refreshVestito();
        },
      });
  }

  renameFilo(filoId: string, newLabel: string): void {
    this.http.put<Filo>(`/api/filo/${filoId}`, { title: newLabel }).subscribe({
      complete: () => {
        this.refreshVestito();
      },
      error: (err: HttpError) => {
        console.error('Error renaming filo:', err);
        this.toast.error(
          err.message ?? 'Errore durante il rinominazione del filo'
        );
      },
    });
  }

  renameFibra(fibraId: string, newLabel: string): void {
    this.http
      .put<Fibra>(`/api/fibra/${fibraId}`, { nome: newLabel })
      .subscribe({
        complete: () => {
          this.refreshVestito();
        },
        error: (err: HttpError) => {
          console.error('Error renaming fibra:', err);
          this.toast.error(
            err.message ?? 'Errore durante il rinominazione della fibra'
          );
        },
      });
  }
}

interface Tab {
  id: string;
  label: string;
  icon: string;
  component: Type<any>;
}
