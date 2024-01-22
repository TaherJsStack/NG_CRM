import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'pages',
      loadChildren: () => import('./pages/pages-routing.module').then(x => x.PagesRouting),  
    },
    {
      path: 'authentication',
      loadChildren: () => import('./authentication/authentication-routing.module').then(x => x.AuthenticationRouting),  
    },
    {
      path: 'errors',
      loadChildren: () => import('./errors/errors-routing.module').then(x => x.ErrorsRouting),  
    },
    {
      path: '',
      redirectTo: 'authentication',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: 'errors',
    },
];
