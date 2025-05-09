import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, httpResource } from '@angular/common/http';
import type { Impostazioni, Vestito } from '@prisma/client';
import { Dialog } from '@angular/cdk/dialog';
import { GlossarioPipe } from '../../pipes/glossario.pipe';
import { AuthService } from '../../services/auth.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService, Theme } from '../../services/theme.service';
import { Router } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'dress-boutique',
  standalone: true,
  imports: [DatePipe, GlossarioPipe, NgbDropdownModule],
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css'],
})
export class BoutiqueComponent {
  http = inject(HttpClient);
  dialog = inject(Dialog);
  authService = inject(AuthService);
  cdr = inject(ChangeDetectorRef);
  router = inject(Router);
  user = this.authService.user;
  query = signal<string>('');
  vestiti = httpResource<Vestito[]>(() => `/api/vestito?${this.query()}`, {
    defaultValue: [],
    equal: (a, b) =>
      a.length === b.length && a.every((v, i) => v.id === b[i].id),
  });
  themeService = inject(ThemeService);

  createVestito() {
    this.http
      .post<Vestito>('/api/vestito', {
        title: 'Untitled',
      })
      .subscribe({
        error: (err) => {
          console.error(err);
        },
        next: (res) => {
          this.openVestito(res.id);
        },
      });
  }

  openVestito(id: string) {
    this.router.navigate(['boutique', 'editor'], {
      queryParams: { id },
      queryParamsHandling: 'merge',
    });
  }

  setTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }

  logout() {
    this.authService.logout().subscribe();
  }

  openUserSettings() {
    const dialogRef = this.dialog.open(UserComponent, {
      data: this.user()?.impostazioni,
      hasBackdrop: true,
    });
  }
}
