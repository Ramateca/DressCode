import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  status?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private nextId = 0;
  toasts = signal<Toast[]>([]);

  show(message: string, type: ToastType = 'info', status?: number): void {
    const id = this.nextId++;
    this.toasts.update(toasts => [...toasts, { id, message, type, status }]);

    // Auto-dismiss after 5 seconds
    setTimeout(() => this.dismiss(id), 5000);
  }

  dismiss(id: number): void {
    this.toasts.update(toasts => toasts.filter(toast => toast.id !== id));
  }

  // Convenience methods
  success(message: string): void {
    this.show(message, 'success');
  }

  error(message: string, status?: number): void {
    this.show(message, 'error', status);
  }

  warning(message: string): void {
    this.show(message, 'warning');
  }

  info(message: string): void {
    this.show(message, 'info');
  }
}
