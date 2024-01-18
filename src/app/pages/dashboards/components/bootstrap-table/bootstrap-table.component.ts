import { Component, OnInit } from '@angular/core';
import { DataListInterface } from '../../../../core/models/data-list';
import { DataListService } from '../../../../core/services/data-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bootstrap-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './bootstrap-table.component.html',
  styleUrl: './bootstrap-table.component.scss'
})
export class BootstrapTableComponent implements OnInit {

  dataList: DataListInterface[] = [] 
  
  constructor( private dataListService: DataListService){}

  ngOnInit(): void {
      this.dataListService.getDataList().subscribe(res => {
        this.dataList = res
      })
  }

}
