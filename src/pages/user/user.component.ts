import { AuthService } from './../../services/auth.service';
import { Component, OnInit, inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import type { Impostazioni, Vestito } from '@prisma/client';
import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dress-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [ReactiveFormsModule, NgClass],
})
export class UserComponent {
  dialogRef = inject(DialogRef<Impostazioni>);
  fb = inject(NonNullableFormBuilder);
  data: Impostazioni = inject(DIALOG_DATA, { optional: true });
  http = inject(HttpClient);
  authService = inject(AuthService);
  user = this.authService.user;

  form = this.fb.group({
    id: [this.data?.id ?? '', Validators.required],
    useGlossaryTerms: [this.data?.useGlossaryTerms ?? true],
    showTooltips: [this.data?.showTooltips ?? true],
    fontSize: [this.data?.fontSize ?? 'normal', Validators.required],
    showStatsOnLogin: [this.data?.showStatsOnLogin ?? true],
    notificationsEmail: [this.data?.notificationsEmail ?? true],
    contrastMode: [this.data?.contrastMode ?? false],
  });

  saveSettings(): void {
    if (this.form.valid && this.data?.id) {
      console.log(this.form.getRawValue());
      this.http
        .put<Vestito>(`/api/impostazioni/${this.data?.id}`, this.form.getRawValue())
        .subscribe({
          next: (res) => {
            this.authService.me().subscribe();
            this.dialogRef.close();
          },
          error: (err) => {
            console.error(err);
          },
          complete: () => {
            console.log('completato');
          },
        });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
