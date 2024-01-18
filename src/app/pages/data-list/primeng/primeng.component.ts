import { Component } from '@angular/core';
import {  PrimengTableComponent } from '../../components';

@Component({
  selector: 'app-primeng',
  standalone: true,
  imports: [
    PrimengTableComponent
  ],
  templateUrl: './primeng.component.html',
  styleUrl: './primeng.component.scss'
})
export class PrimengComponent {

}
