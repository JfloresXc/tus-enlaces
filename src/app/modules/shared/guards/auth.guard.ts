import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('accessToken');
  const router = inject(Router);

  if (!token) {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
