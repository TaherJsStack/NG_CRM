import {Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';


export const AuthenticationRouting: Routes =  [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./login/login.component').then(x => x.LoginComponent)
      },
      {
        path: 'forgot',
        loadComponent: () => import('./forgot-password/forgot-password.component').then(x => x.ForgotPasswordComponent)
      },
      {
        path: 'reset',
        loadComponent: () => import('./reset-password/reset-password.component').then(x => x.ResetPasswordComponent)
      },
      {
        path: 'confirm',
        loadComponent: () => import('./confirm-password/confirm-password.component').then(x => x.ConfirmPasswordComponent)
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]
  },
];

