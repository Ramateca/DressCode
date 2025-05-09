import { TestComponent } from './../tests/test/test.component';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { LandingComponent } from '../pages/landing/landing.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { BoutiqueComponent } from '../pages/boutique/boutique.component';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guard/auth.guard';
import { LoginGuard } from '../guard/login.guard';
import { EditorComponent } from '../pages/editor/editor.component';
import { Title } from '@angular/platform-browser';
import { ServerTestComponent } from '../tests/server-test/server-test.component';
import { PrerenderTestComponent } from '../tests/prerender-test/prerender-test.component';

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`DressCode - ${title}`);
    } else {
      this.title.setTitle('DressCode');
    }
  }
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: () => {
      const authService = inject(AuthService);
      return authService.user() ? '/boutique' : 'landing';
    },
    pathMatch: 'full',
    title: 'Home',
  },
  { path: 'landing', component: LandingComponent, title: 'Landing' },
  {
    path: 'login',
    canActivate: [LoginGuard],
    component: LoginComponent,
    title: 'Login',
  },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  {
    path: 'boutique',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    title: 'Boutique',
    children: [
      {
        path: '',
        component: BoutiqueComponent,
      },
      {
        path: 'editor',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: EditorComponent,
      },
    ],
  },
  { path: 'test', component: TestComponent, title: 'Test' },
  {
    path: 'server-test',
    component: ServerTestComponent,
    title: 'Server Test',
  },
  {
    path: 'prerender-test',
    component: PrerenderTestComponent,
    title: 'Prerender Test',
  },
];
