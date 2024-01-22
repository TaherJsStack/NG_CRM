import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, NavComponent, SideMenuComponent } from './core/components';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { Direction } from '@angular/cdk/bidi';
import { LanguageService } from './core/services/app';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavComponent, 
    SideMenuComponent,
    FooterComponent,
    HttpClientModule,
    MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NG-CRM';
  showFiller = false;

  direction: Direction = "ltr";
  isMobile:    boolean = false;


  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.checkPageSize()
    this.getLang()
  }

  checkPageSize() { }

  getLang() {
    this.languageService.language.subscribe(lang => {
      this.direction = lang === 'en'? 'ltr' : 'rtl'
    })
  }

}
