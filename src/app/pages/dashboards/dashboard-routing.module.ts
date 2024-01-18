import {Routes } from '@angular/router';


export const DashboardRouting: Routes =  [
  {
    path:'',
    loadComponent: () => import('./dashboards.component').then(x => x.DashboardsComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./dashboard-view1/dashboard-view1.component')
          .then(x => x.DashboardView1Component),
      },
      {
        path: 'dashboard-view1',
        loadComponent: () => import('./dashboard-view1/dashboard-view1.component')
          .then(x => x.DashboardView1Component),
      },
      {
        path: 'dashboard-view2',
        loadComponent: () => import('./dashboard-view2/dashboard-view2.component')
          .then(x => x.DashboardView2Component),
      },
      {
        path: 'dashboard-view3',
        loadComponent: () => import('./dashboard-view3/dashboard-view3.component')
          .then(x => x.DashboardView3Component),
      },
    ]
  }
  // {
  //   path: '**',
  //   redirectTo: '',
  // },
];

