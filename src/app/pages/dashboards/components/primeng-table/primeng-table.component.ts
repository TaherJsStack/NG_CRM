import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DataListInterface } from '../../../../core/models/data-list';
import { DataListService } from '../../../../core/services';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { CinemasListPipe } from '../../../../core/pipes/cinemas-list.pipe';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-primeng-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    CinemasListPipe,
    PaginatorModule
  ],
  templateUrl: './primeng-table.component.html',
  styleUrl: './primeng-table.component.scss'
})
export class PrimengTableComponent {

  tooltipEvent: 'focus' | 'hover' = 'hover';

  dataList: DataListInterface[] = [] 

  constructor(private dataListService: DataListService){}

  ngOnInit(): void {
    this.dataListService.getDataList().subscribe(res => {
      this.dataList = res;

      console.log('res --->', res)


    })
    this.setTooltipEvent()
  }
  
  setTooltipEvent() {
    if ( window.innerWidth < 1199 ) {
      console.log('window.innerWidth -->', window.innerWidth)
      this.tooltipEvent = 'focus'
    } 
  }
  
}
