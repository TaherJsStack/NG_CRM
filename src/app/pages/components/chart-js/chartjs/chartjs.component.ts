import { AfterContentInit, Component, ElementRef, Input, OnDestroy, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ChartData, ChartOptions, Plugin, BasePlatform, ChartType, ChartDataset } from 'chart.js';
import { Chart } from 'chart.js/auto';
import { ChartJsTypesEnum } from '../../../../core/enums';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chartjs',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './chartjs.component.html',
  styleUrl: './chartjs.component.scss'
})
export class ChartjsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('chartontainer', { static: true }) chartContainer!: HTMLElement

  chart: any;

  @Input() type:      ChartType = 'bar';
  @Input() data:      ChartData = {} as ChartData;
  
  @Input() plugins?:  Plugin[];
  @Input() platform?: typeof BasePlatform;
  @Input() options:   ChartOptions = {}
  @Input() id:        string = this.type;
  
  constructor(
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef) {}
  
  ngOnInit(): void { 

  }
  
  ngAfterViewInit(): void {

    let ctx = this.elementRef.nativeElement.querySelector(`#${this.id}`); // 2d context
    if (ctx) {
      this.createChart(ctx);
      this.changeDetectorRef.detectChanges();
    }
  }

  createChart(ctx: string){
  
      this.chart = new Chart(ctx, {
        type:    this.type,
        data:    this.data,
        options: this.options
      });
    
  }

  ngOnDestroy(): void {
      this.chart.destroy();
  }

}
