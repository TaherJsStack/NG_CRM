import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


import { RemoveCardDirective } from '../../../core/directives/remove-card.directive';
import { ChartjsComponent, Am5ChartComponent, CardTemplateComponent } from '../../components';
import { ChartJsTypesEnum } from '../../../core/enums';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dashboard-view1',
  templateUrl: './dashboard-view1.component.html',
  styleUrls: ['./dashboard-view1.component.scss'],
  standalone: true,
  imports: [
    RemoveCardDirective,
    ChartjsComponent,
    Am5ChartComponent,
    CardTemplateComponent
  ]
})
export class DashboardView1Component implements OnInit {


  chartJsTypesEnum = ChartJsTypesEnum;

  data: ChartData = { // values on X-Axis
    labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
             '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
     datasets: [
      {
        label: 'Sales',
        data: [467, 576, 572, 79, 92,
             574, 573, 576],
        backgroundColor: 'blue'
      },
      {
        label: 'Profit',
        data: [542, 542, 536, 327, 17,
               0.00, 538, 541],
        backgroundColor: 'limegreen'
      }  
    ]
  };
  options = {
    aspectRatio:2.5
  }

  constructor(){}

  ngOnInit(): void { }
    


}
