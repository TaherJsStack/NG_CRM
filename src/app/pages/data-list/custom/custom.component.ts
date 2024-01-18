import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgFor
  ]
})
export class CustomComponent implements OnInit {

  list:{item:number}[] =[{item: 1},{item: 1},{item: 1},{item: 1},{item: 1},{item: 1},{item: 1},{item: 1},]
  
  constructor() {}

  ngOnInit(): void {
  }


}
