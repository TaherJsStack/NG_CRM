import { Component, OnInit } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { TooltipModule } from 'primeng/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [
    QRCodeModule,
    TooltipModule,
    ClipboardModule

  ],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.scss'
})
export class TicketDetailsComponent implements OnInit {
  tooltipEvent: 'focus' | 'hover' = 'hover';

  value = `www.tazkty.com/473847`;

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
    this.setTooltipEvent()
  }
  
  setTooltipEvent() {
    if ( window.innerWidth < 1199 ) {
      this.tooltipEvent = 'focus'
    } 
  }


}
