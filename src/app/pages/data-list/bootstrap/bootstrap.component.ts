import { Component } from '@angular/core';
import { BootstrapTableComponent } from '../../components';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
  standalone: true,
  imports: [
    BootstrapTableComponent
  ]
})
export class BootstrapComponent {

}
