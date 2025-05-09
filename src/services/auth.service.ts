import {
  inject,
  Injectable,
  PLATFORM_ID,
  TransferState,
  makeStateKey,
  REQUEST_CONTEXT,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { User, Prisma } from '@prisma/client';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { catchError, map, tap, throwError } from 'rxjs';
import { signal } from '@angular/core';
import { Router } from '@angular/router';

const USER_KEY = makeStateKey<UserWithImpostazioni | null>('user');

type UserWithImpostazioni = Prisma.UserGetPayload<{
  include: {
    impostazioni: true;
  };
}>;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:4200/auth';

  http = inject(HttpClient);
  platformId = inject(PLATFORM_ID);
  transferState = inject(TransferState);
  requestContext = inject(REQUEST_CONTEXT, { optional: true });

  #user = signal<UserWithImpostazioni | null>(null);
  user = this.#user.asReadonly();
  private readonly router = inject(Router);

  constructor() {
    if (isPlatformServer(this.platformId)) {
      if (
        this.requestContext &&
        typeof this.requestContext === 'object' &&
        'user' in this.requestContext
      ) {
        this.#user.set(this.requestContext.user as UserWithImpostazioni);
        this.transferState.set(
          USER_KEY,
          this.requestContext.user as UserWithImpostazioni
        );
      } else {
        this.#user.set(null);
        this.transferState.set(USER_KEY, null);
      }
    } else if (isPlatformBrowser(this.platformId)) {
      const transferredUser = this.transferState.get(USER_KEY, null);
      this.#user.set(transferredUser);
    }
  }

  pullUser(): Promise<UserWithImpostazioni | null> {
    return new Promise((resolve) => {
      if (this.user() === null && isPlatformBrowser(this.platformId)) {
        this.me().subscribe({
          next: (user) => resolve(user),
          error: () => resolve(null),
        });
      } else {
        resolve(this.user());
      }
    });
  }

  register(user: Prisma.UserCreateInput) {
    return this.http
      .post<UserWithImpostazioni>(`${this.url}/register`, user, {
        withCredentials: true,
      })
      .pipe(
        tap((user) => this.#user.set(user)),
        catchError((error) => {
          this.#user.set(null);
          return throwError(() => error);
        })
      );
  }

  login(user: User) {
    return this.http
      .post<UserWithImpostazioni>(`${this.url}/login`, user, {
        withCredentials: true,
      })
      .pipe(
        tap((user) => this.#user.set(user)),
        catchError((error) => {
          this.#user.set(null);
          return throwError(() => error);
        })
      );
  }

  logout() {
    return this.http
      .post<void>(`${this.url}/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => this.#user.set(null)),
        catchError((error) => {
          this.#user.set(null);
          return throwError(() => error);
        })
      );
  }

  me() {
    return this.http
      .get<UserWithImpostazioni>(`${this.url}/me`, {
        withCredentials: true,
        observe: 'response',
      })
      .pipe(
        map((res) => {
          if (res.status === 302) {
            const location = res.headers.get('location');
            if (location) {
              this.router.navigate([location]);
            }
            return null;
          }
          return res.body;
        }),
        tap((user) => this.#user.set(user)),
        catchError((error) => {
          this.#user.set(null);
          return throwError(() => error);
        })
      );
  }
}
