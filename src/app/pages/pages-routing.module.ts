import {Routes } from '@angular/router';
import { PagesComponent } from './pages.component';


export const PagesRouting: Routes =  [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboards',
        loadChildren: () => import('./dashboards/dashboard-routing.module').then(x => x.DashboardRouting)
      },
      {
        path: 'dashboards',
        loadChildren: () => import('./dashboards/dashboard-routing.module').then(x => x.DashboardRouting)
      },
      {
        path: 'data-list',
        loadChildren: () => import('./data-list/data-list-routing.module').then(x => x.PagesRouting)
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms-routing.module').then(x => x.FormsRouting)
      },
      {
        path: '**',
        redirectTo: 'dashboards',
      },
    ]
  },
];

