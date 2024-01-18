import { Routes } from '@angular/router';

export const PagesRouting: Routes =  [
  {
    path: 'bootstrap',
    loadComponent: () => import('./bootstrap/bootstrap.component').then(x => x.BootstrapComponent)
  },
  {
    path: 'ng-material',
    loadComponent: () => import('./ng-material/ng-material.component').then(x => x.NgMaterialComponent)
  },
  {
    path: 'custom',
    loadComponent: () => import('./custom/custom.component').then(x => x.CustomComponent)
  },
  {
    path: 'primeng',
    loadComponent: () => import('./primeng/primeng.component').then(x => x.PrimengComponent)
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  // },
];

