import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import type { Prisma } from '@prisma/client';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'dress-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  passwordMatchValidator: ValidatorFn  = (form) => {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { 'mismatch': true };
  }


  fb = inject(NonNullableFormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  toast = inject(ToastService);
  showPassword = false;
  registerForm = this.fb.group({
    username: ['', Validators.required],
    nome: ['', Validators.required],
    cognome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  }, { validators: this.passwordMatchValidator });
  loading = false;
  errorMessage = '';


  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.loading = true;
      const userData: Prisma.UserCreateInput & { confirmPassword?: string } = this.registerForm.getRawValue();
      delete userData.confirmPassword;
      this.authService.register(userData).subscribe({
        next: () => {
          this.router.navigate(['/boutique']);
        },
        error: (error) => {
          console.error('Registration error:', error);
          if (error.status === 400 && error.error?.message?.includes('Email')) {
            this.toast.error('This email is already registered. Please try a different email or login instead.');
          } else {
            this.toast.error(error.error?.message ?? 'Registration failed. Please try again.');
          }
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
    } else {
      if (this.registerForm.hasError('mismatch')) {
        this.toast.error('Passwords do not match. Please try again.');
      } else {
        this.registerForm.markAllAsTouched();
        this.toast.warning('Please fill in all required fields correctly.');
      }
    }
  }
}
