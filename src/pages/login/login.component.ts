import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import type { User } from '@prisma/client';
import { DressFormConfig } from '../../components/dress-form/types';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'dress-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);
  private toast = inject(ToastService);
  loading = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  dressConfig: DressFormConfig<{ email: string; password: string }> = {
    email: {
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      validate: {
        required: true,
        custom: Validators.email,
      },
    },
    password: {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      validate: {
        required: true,
      },
    },
  };

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.login(this.loginForm.getRawValue() as User).subscribe({
        next: async (res) => {
          await this.router.navigate(['/boutique']);
        },
        error: (err) => {
          console.error(err);
          if (err.status === 401) {
            this.toast.error('Invalid email or password. Please try again.');
          } else {
            this.toast.error(err.message ?? 'An error occurred during login. Please try again.');
          }
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
