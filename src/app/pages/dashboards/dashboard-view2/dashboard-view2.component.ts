import { Component } from '@angular/core';
import { FilterComponent } from '../components/filter/filter.component';
import { TableComponent } from '../components/table/table.component';
import { TicketDetailsComponent } from '../components/ticket-details/ticket-details.component';
import { ApexChartComponent } from '../../components';

@Component({
  selector: 'app-dashboard-view2',
  templateUrl: './dashboard-view2.component.html',
  styleUrls: ['./dashboard-view2.component.scss'],
  standalone: true,
  imports: [
    TicketDetailsComponent,
    FilterComponent,
    TableComponent,
    ApexChartComponent  
  ]
})
export class DashboardView2Component {

}
