import { Routes } from '@angular/router';
import { authGuard } from './modules/shared/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./modules/auth/pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'users', loadChildren: () => import('./modules/user/user.routes').then(m => m.routes), canActivate: [authGuard] },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];
