import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'landing',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'login',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'register',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'boutique/**',
    renderMode: RenderMode.Client,
  },
  {
    path: 'test',
    renderMode: RenderMode.Client,
  },
  {
    path: 'server-test',
    renderMode: RenderMode.Server,
  },
  {
    path: 'prerender-test',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
