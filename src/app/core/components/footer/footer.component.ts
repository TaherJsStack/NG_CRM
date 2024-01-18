import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
})
export class FooterComponent implements OnInit {

  footerText: string = 'Practical Assessment'
  constructor() { }

  ngOnInit(): void {
  }

}
