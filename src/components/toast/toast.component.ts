import { Component, inject } from '@angular/core';
import { ToastService, Toast } from '../../services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dress-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
  toastService = inject(ToastService);

  // Method to dismiss toast with animation
  dismissWithAnimation(toast: Toast): void {
    const element = document.getElementById(`toast-${toast.id}`);
    if (element) {
      element.classList.remove('animate-enter');
      element.classList.add('animate-exit');

      // Wait for animation to finish before removing
      setTimeout(() => {
        this.toastService.dismiss(toast.id);
      }, 280);
    } else {
      this.toastService.dismiss(toast.id);
    }
  }

  getToastClasses(toast: Toast): Record<string, boolean> {
    const baseClasses = {
      'animate-enter': true,
    };

    const typeClasses: Record<string, Record<string, boolean>> = {
      success: { 'bg-green-500 text-white dark:bg-green-600': true },
      error: { 'bg-red-500 text-white dark:bg-red-600': true },
      warning: { 'bg-yellow-500 text-white dark:bg-yellow-600': true },
      info: { 'bg-blue-500 text-white dark:bg-blue-600': true },
    };

    return { ...baseClasses, ...typeClasses[toast.type] };
  }
}
