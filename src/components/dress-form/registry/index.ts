import { InjectionToken, Type } from "@angular/core";
import { DressForm } from "../dress-form.component";
import { DressFormElement } from "../form-element/dress-form-element.component";
const Registry = new Map<string, Type<DressFormElement>>();

export const DRESS_FROM_ELEMENTS_REGISTRY = new InjectionToken<Map<string, Type<unknown>>>("DRESS_FROM_ELEMENTS_REGISTRY", {
  providedIn: DressForm,
  factory: () => Registry,
});


export function Register(name: string) {
  return function <T extends Type<DressFormElement>>(target: T) {
    Registry.set(name, target);
  };
}

export function provideRegistry() {
  return { provide: DRESS_FROM_ELEMENTS_REGISTRY, useValue: Registry };
}
