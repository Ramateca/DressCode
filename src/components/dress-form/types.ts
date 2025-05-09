import { ValidatorFn } from '@angular/forms';
import { Input } from 'postcss';

type InputElementType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'custom'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'select'
  | 'submit'
  | 'tel'
  | 'text'
  | 'textarea'
  | 'time'
  | 'url'
  | 'week';

export type ErrorName = string;
export type StyleProperty = keyof CSSStyleDeclaration;
export type ListenerName = string;

type Autocomplete = 'off' | 'on' | string;
type Autocapitalize =
  | 'off'
  | 'on'
  | 'words'
  | 'sentences'
  | 'characters'
  | 'none';

interface BaseDressFormElementDefinition {
  label?: string; // Etichetta visibile per l'utente (opzionale)
  prefix?: string; // Prefisso del valore (opzionale)
  suffix?: string; // Suffisso del valore (opzionale)
  multiple?: boolean; // Permette valori multipli (opzionale)
  hidden?: boolean; // Nasconde il componente (opzionale)
  clearOnHide?: boolean; // Cancella il valore quando il componente è nascosto (opzionale)
  customValidators?: Array<{
    name: string;
    args: Array<unknown>;
  }>; // Validatori personalizzati (opzionale)
  errorMessages?: Record<ErrorName, string>; // Messaggi di errore personalizzati (opzionale)
  conditional?: {
    // Condizioni per mostrare/nascondere (opzionale)
    show?: boolean; // Mostra il componente se la condizione è vera
    when?: string; // Chiave del campo da valutare
    eq?: string; // Valore atteso per la condizione
  };
  customClass?: string; // Classe CSS personalizzata (opzionale)
  customStyle?: Record<StyleProperty, string>; // Stile CSS personalizzato (opzionale)
  description?: string; // Descrizione del componente (opzionale)
  tooltip?: string; // Testo del tooltip (opzionale)
  disabled?: boolean; // Disabilita il componente (opzionale)
  listeners?: Record<keyof HTMLElementEventMap, ListenerName>; // Eventi del componente (opzionale)
}

interface CustomDressFormElementDefinition extends BaseDressFormElementDefinition {
  type: 'custom';
  customType: string;
  [key: string]: unknown;
}

interface ButtonDressFormElementDefinition
  extends BaseDressFormElementDefinition {
  type: 'button';
  autocapitalize?: Autocapitalize;
  value?: string;
}

interface CheckboxDressFormElementDefinition
  extends BaseDressFormElementDefinition {
  type: 'checkbox';
  autocapitalize?: Autocapitalize;
  checked?: boolean;
  required?: boolean;
  value?: string;
}

interface ColorDressFormElementDefinition
  extends BaseDressFormElementDefinition {
  type: 'color';
  autocapitalize?: Autocapitalize;
  autocomplete?: Autocomplete;
  value?: string;
}

interface DateDressFormElementDefinition
  extends BaseDressFormElementDefinition {
  type: 'date';
  autocapitalize?: Autocapitalize;
  autocomplete?: Autocomplete;
  max?: string;
  min?: string;
  readonly?: boolean;
  required?: boolean;
  step?: number | 'any';
  value?: string;
}

interface DatetimeLocalDressFormElementDefinition
  extends BaseDressFormElementDefinition {
  type: 'datetime-local';
  autocapitalize?: Autocapitalize;
  autocomplete?: Autocomplete;
  max?: string;
  min?: string;
  readonly?: boolean;
  required?: boolean;
  step?: number | 'any';
  value?: string;
}

interface EmailDressFormElementDefinition
  extends BaseDressFormElementDefinition {
  type: 'email';
  autocomplete?: Autocomplete;
  maxLength?: number;
  minLength?: number;
  multiple?: boolean;
  pattern?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  value?: string;
}

interface FileDressFormElementDefinition
  extends BaseDressFormElementDefinition {
  type: 'file';
  accept?: string;
  autocapitalize?: Autocapitalize;
  autocomplete?: Autocomplete;
  capture?: 'user' | 'environment' | 'inline' | 'auto';
  multiple?: boolean;
  required?: boolean;
  value?: string;
}

export type DressFormElementDefinition = {
  button: ButtonDressFormElementDefinition;
  checkbox: CheckboxDressFormElementDefinition;
  color: ColorDressFormElementDefinition;
  custom: CustomDressFormElementDefinition;
  date: DateDressFormElementDefinition;
  'datetime-local': DatetimeLocalDressFormElementDefinition;
  email: EmailDressFormElementDefinition;
  file: FileDressFormElementDefinition;
  hidden: never;
  image: never;
  month: never;
  number: never;
  password: never;
  radio: never;
  range: never;
  reset: never;
  search: never;
  select: never;
  submit: never;
  tel: never;
  text: never;
  textarea: never;
  time: never;
  url: never;
  week: never;
}[InputElementType];

export type DressFormConfig<T extends Record<string, unknown>> = {
  [K in keyof T as K extends string ? K : never]?: DressFormElementDefinition;
};

export type DressFormValue<ConfigType extends Record<string, unknown>> = {
  [K in keyof ConfigType]: ConfigType[K];
};

const test: DressFormConfig<{
  name: string;
  age: number;
  email: string;
}> = {
  name: {
    type: 'custom',
    customType: 'prova',
    picone: 'luna',
  },
};