import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet
  ]
})
export class PagesComponent {

  constructor() {
    console.log('----------------------------------')
  }
}
