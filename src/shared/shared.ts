import {
  DressFormConfig,
  DressFormElementDefinition,
} from '../components/dress-form/types';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { EventEmitter, inject, NgZone } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { Router } from 'express';
import { HttpMethod, RouteDefinition } from '../server/api/route-definition';

export function createFormGroupFromDressFormConfig<
  T extends Record<string, unknown>,
>(config: DressFormConfig<T>): FormGroup {
  const group: Record<string, AbstractControl> = {};

  Object.keys(config).forEach((key) => {
    const field: DressFormElementDefinition = config[key as keyof typeof config]!;
    const validators: Array<ValidatorFn> = [];

    if (field.validate) {
      if (field.validate.required) {
        validators.push(Validators.required);
      }
      if (field.validate.minLength) {
        validators.push(Validators.minLength(field.validate.minLength));
      }
      if (field.validate.maxLength) {
        validators.push(Validators.maxLength(field.validate.maxLength));
      }
      if (field.validate.pattern) {
        validators.push(Validators.pattern(field.validate.pattern));
      }
      if (field.validate.custom) {
        validators.push(field.validate.custom);
      }
    }

    group[key] = new FormControl(field.defaultValue ?? '', validators);
  });

  return new FormGroup(group);
}

export function emitTo<T>(
  targetEmitter: EventEmitter<T>,
): OperatorFunction<T, T> {
  return (source: Observable<T>) =>
    new Observable<T>((subscriber) => {
      const subscription = source.subscribe({
        next(value) {
          targetEmitter.emit(value); // Emit to the target EventEmitter
          subscriber.next(value); // Pass the value downstream
        },
        error(err) {
          subscriber.error(err); // Forward errors
        },
        complete() {
          subscriber.complete(); // Forward completion
        },
      });

      // Cleanup when the downstream unsubscribes
      return () => subscription.unsubscribe();
    });
}

export function registerRoutes(
  router: Router,
  definitions: RouteDefinition,
): void {
  for (const path in definitions) {
    const { middlewares = [], methods = {} } = definitions[path];

    for (const method of Object.keys(methods) as HttpMethod[]) {
      const methodDef = methods[method];
      if (!methodDef?.handler) continue;

      const allMiddlewares = [
        ...middlewares,
        ...(methodDef.middlewares || []),
        methodDef.handler,
      ];

      router[method](path, ...allMiddlewares);
    }
  }
}
