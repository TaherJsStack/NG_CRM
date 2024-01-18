import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { MatDatepickerComponent } from '../../index';
import ApexCharts from 'apexcharts'

@Component({
  selector: 'app-apex-chart',
  standalone: true,
  imports: [
    MatDatepickerComponent
  ],
  templateUrl: './apex-chart.component.html',
  styleUrl: './apex-chart.component.scss'
})
export class ApexChartComponent  implements OnInit, AfterViewInit, OnDestroy{

  options = {
    chart: {
      width: "100%",
      height: "100%",
      type: "area",
      toolbar: {
        show: false,
      }
    },
    yaxis:{
      show: false,
    },
    stroke:{
      colors: ['#8A74F9'],
      with: .1
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: " ",
        data: [20, 40, 38, 45, 55, 70, 30, 20, 85, 25]
      }
    ],
    fill: {
      type: "gradient",
      // color:"#8A74F9",
      gradient: {
        gradientToColors:["#8A74F9", "#fff"],
        opacityFrom: 1,
        opacityTo: 0.4,
        inverseColors: true,
      }
    },
    xaxis: {
      categories: [
        " يناير",
        "فبراير",
        "مارس",
        "ابريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "اكتوبر",
        "نوفمبر",
        "ديسمبر"
      ],
      labels: {
        style: {
          colors: '#9291A5',
          fontSize: '12px',
          fontFamily: 'NotoSansArabic-Regular',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
      },
      },
      title: {
        text: undefined,
        align: 'left',
        margin: 100,
        offsetX: 50,
        offsetY: 50,
        floating: true,
        style: {
          fontSize:  '40px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  'red'
        },
      }
    },
    markers: {
      colors: ['#8A74F9'],
      width: 2,
      strokeWidth: 2,
      fillColors: ['#8A74F9']
    },
    tooltip: {
      x: {
        formatter: function(value: number | any, opts: number | any) {
          let dataPointIndex = opts.dataPointIndex;
          let dataPointIndexValue= opts.series[0][dataPointIndex]
          return `${ dataPointIndexValue } إستخدام `
        },
      },
      y: {
        formatter: function(value: number | any, opts: number | any) {
            const sum = opts.series[0].reduce((a: number | any, b: number | any) => a + b, 0);
            const percent = (value / sum) * 100;
            return percent.toFixed(0) + '%'
        },
      },
    },
 
  
  };
 
 chart = new ApexCharts(document.querySelector("#chart"), this.options);

 constructor() { }

 ngOnInit(): void {
   this.chart = new ApexCharts(document.querySelector("#chart"), this.options);
 }

 ngAfterViewInit(): void {
   this.chart.render();
 }

 ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.chart.destroy()
 }


}
