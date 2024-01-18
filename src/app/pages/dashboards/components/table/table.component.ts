import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapTableComponent } from '../bootstrap-table/bootstrap-table.component';
import { PrimengTableComponent } from '../primeng-table/primeng-table.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    BootstrapTableComponent,
    PrimengTableComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  constructor(){}
}
