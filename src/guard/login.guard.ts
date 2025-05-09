import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  authService = inject(AuthService);
  router = inject(Router);

  constructor() {}

  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    if (this.authService.user()) {
      this.router.navigate(['/boutique']);
      return false;
    } else {
      return true;
    }
  }

}