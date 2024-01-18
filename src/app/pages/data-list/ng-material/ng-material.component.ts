import { Component } from '@angular/core';
import {  MaterialTableComponent } from '../../components';

@Component({
  selector: 'app-ng-material',
  templateUrl: './ng-material.component.html',
  styleUrls: ['./ng-material.component.scss'],
  standalone: true,
  imports: [
    MaterialTableComponent
  ]
})
export class NgMaterialComponent {

}
