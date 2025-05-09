import {
  AfterViewInit,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  EventEmitter,
  inject,
  input,
  Output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ControlContainer,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { filter, fromEvent, map, Observable } from 'rxjs';
import { DressControlContainer } from '../../directives/dress-control-container/dress-control-container';
import { emitTo } from '../../shared/shared';
import { DRESS_FROM_ELEMENTS_REGISTRY } from './registry';
import { DressFormConfig, DressFormValue } from './types';

@Component({
  selector: 'form[dress-form]',
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    @for (field of configKeys(); track field) {
      @let fieldConfig = config()[field];
      @let component = getComponent(fieldConfig?.type);
      @if (!fieldConfig?.hidden && component) {
        <ng-container *ngComponentOutlet="component; inputs: { dressFormName: field }"></ng-container>
      }
    }
    <button type="submit">spicogna</button>
  `,
  styleUrl: './dress-form.component.css',
  hostDirectives: [DressControlContainer],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(DressControlContainer, { self: true }),
    },
  ],
  standalone: true,
})
export class DressForm<
  Tipo extends Record<string, unknown>,
  Config extends DressFormConfig<Tipo>
> implements AfterViewInit
{
  getComponent(type?: string) {
    const component = this.#registry.get(type ?? 'text');
    if (!component) {
      console.error(`Component not found for type: ${type}`);
    }
    return component;
  }
  config = input.required<Config>({ alias: 'dress-form' });
  configKeys = computed(() => Object.keys(this.config()));

  dressFormDirective = inject<DressControlContainer<Tipo, Config>>(
    DressControlContainer,
    { self: true }
  );
  destroyRef = inject(DestroyRef);
  elementRef = inject<ElementRef<HTMLFormElement>>(ElementRef);

  readonly #registry = inject(DRESS_FROM_ELEMENTS_REGISTRY);

  @Output() protected submit = new EventEmitter<DressFormValue<Tipo>>();
  @Output() protected reset = new EventEmitter<void>();

  constructor() {
    effect(() => {
      this.dressFormDirective.config = this.config();
    });
    this.elementRef.nativeElement.addEventListener('submit', ($event) => {
      $event.preventDefault();
      $event.stopPropagation();
      $event.stopImmediatePropagation();
    });
    (<Observable<KeyboardEvent>>(
      fromEvent(this.elementRef.nativeElement, 'keydown')
    ))
      .pipe(
        filter((e) => e.key === 'Enter'),
        map(() => this.dressFormDirective.form.getRawValue()),
        emitTo(this.submit),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    const submitButton = this.elementRef.nativeElement.querySelector(
      'button[type=submit]'
    );
    if (submitButton) {
      fromEvent(submitButton, 'click')
        .pipe(
          map(() => this.dressFormDirective.form.getRawValue()),
          emitTo(this.submit),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe();
    }
  }
}
