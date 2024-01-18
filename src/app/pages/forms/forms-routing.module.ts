import {Routes } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { CustomComponent } from './custom/custom.component';
import { NgMaterialComponent } from './ng-material/ng-material.component';

export const FormsRouting: Routes =  [
  {
    path: 'bootstrap',
    component: BootstrapComponent
  },
  {
    path: 'ng-material',
    component: NgMaterialComponent
  },
  {
    path: 'custom',
    component: CustomComponent
  },
  {
    path: '**',
    redirectTo: '',
  },

];

