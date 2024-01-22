import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-template',
  standalone: true,
  imports: [],
  templateUrl: './card-template.component.html',
  styleUrl: './card-template.component.scss'
})
export class CardTemplateComponent implements OnInit {

  @Input() showCardHeader: boolean = true

  constructor() {}

  ngOnInit(): void {
      
  }

}
