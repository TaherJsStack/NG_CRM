import {Routes } from '@angular/router';

import { ErrorsComponent } from './errors.component';


export const ErrorsRouting: Routes =  [
  {
    path: '',
    component: ErrorsComponent,
    children: [
      {
        path: '404',
        loadComponent: () => import('./404/404.component').then(x => x.Error404Component)
      },
      {
        path: '500',
        loadComponent: () => import('./500/500.component').then(x => x.Error500Component)
      },
      {
        path: '**',
        redirectTo: '404',
      },
    ]
  },
];

