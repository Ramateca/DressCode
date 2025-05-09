import { Directive, SimpleChanges } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { DressFormConfig } from '../../components/dress-form/types';
import { createFormGroupFromDressFormConfig } from '../../shared/shared';

@Directive({})
export class DressControlContainer<
  Tipo extends Record<string, unknown>,
  Config extends DressFormConfig<Tipo>,
> extends FormGroupDirective {
  getFieldDefinition(
    name: string,
  ): NonNullable<DressFormConfig<Tipo>[string]> | null {
    return this.#config[name] ?? null;
  }

  set config(value: Config) {
    this.#config = value;
    const changes: SimpleChanges = {
      form: {
        isFirstChange() {
          return this.firstChange;
        },
        currentValue: undefined,
        previousValue: this.form,
        firstChange: this.form === null,
      },
    };
    this.form = createFormGroupFromDressFormConfig(this.#config);
    changes['form'].currentValue = this.form;
    this.ngOnChanges(changes);
  }

  #config: Config = null!;
}
