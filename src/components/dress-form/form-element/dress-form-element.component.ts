import { Component, effect, ElementRef, inject, input } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { DressControlContainer } from '../../../directives/dress-control-container/dress-control-container';
import { DressFormElementDefinition } from '../types';

@Component({
  selector: 'dress-form-element',
  imports: [ReactiveFormsModule],
  templateUrl: './dress-form-element.component.html',
  styleUrl: './dress-form-element.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(DressControlContainer),
    },
  ],
})
export class DressFormElement {
  protected elementConfig: DressFormElementDefinition = null!;
  #element = inject<ElementRef<HTMLElement>>(ElementRef);
  dressFormName = input.required<string>();
  #dressControlContainer = inject(DressControlContainer);

  constructor() {
    this.#element.nativeElement.classList.add('dress-form-element');
    const ef = effect(
      () => {
        const name = this.dressFormName();
        if (name) {
          const config = this.#dressControlContainer.getFieldDefinition(name);
          if (config === null) {
            ef.destroy();
            throw new Error(
              'DressForm element requires DressControlContainer with valid config'
            );
          } else {
            this.elementConfig = config;
            ef.destroy();
          }
        }
      },
      { manualCleanup: true }
    );
  }
}
