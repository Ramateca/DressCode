import { isPlatformBrowser } from '@angular/common';
import {
  Injectable,
  PLATFORM_ID,
  effect,
  inject,
  signal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  #theme = signal<Theme>('system');

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      this.#theme.set(<Theme | null>localStorage?.getItem('theme') ?? 'system');
      effect(() => {
        const theme = this.#theme();
        localStorage?.setItem('theme', theme);
        document.documentElement.setAttribute(
          'class',
          theme === 'system'
            ? window.matchMedia('(prefers-color-scheme: dark)').matches
              ? 'dark'
              : ''
            : theme
        );
      });
    }
  }

  setTheme(theme: Theme) {
    this.#theme.set(theme);
  }

  get theme() {
    return this.#theme();
  }
}

export type Theme = 'light' | 'dark' | 'system';
