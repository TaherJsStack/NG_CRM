import { Direction } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSidenavModule, MatDrawerMode } from '@angular/material/sidenav';

import { RouterOutlet } from '@angular/router';
import { NavComponent, SideMenuComponent, FooterComponent, BreadcrumbComponent, WelcomeComponent } from '../core/components';
import { LanguageService } from '../core/services';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule, 
    NavComponent, 
    SideMenuComponent,
    FooterComponent,
    BreadcrumbComponent,
    WelcomeComponent,
    HttpClientModule,
    MatSidenavModule,
  ]
})
export class PagesComponent {

  showFiller = false;

  direction: Direction = "ltr";
  isMobile:    boolean = false;

  DrawerMode: MatDrawerMode = 'side'
  @ViewChild('drawer') drawer:ElementRef<HTMLElement> | any;
  @ViewChild('drawerContainer') drawerContainer:ElementRef<HTMLElement> | any;

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.checkPageSize()
    this.getLang()
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    if (this.drawerContainer) {
      // console.log(this.drawerContainer._element.nativeElement)
    }
  }

  isAsideMenu(e: any, e2: any) {
    if (e2.opened) {
      // this.drawerContainer._element.nativeElement.classList.remove('full-drawer-container')
    } else {
      // this.drawerContainer._element.nativeElement.classList.add('full-drawer-container')
    }
  }

  checkPageSize() {
    this.isMobile = window.innerWidth > 1000 ? false : true; 
    if (window.innerWidth < 1000 ) {
      this.DrawerMode = 'over'
    }
  }

  getLang() {
    this.languageService.language.subscribe(lang => {
      this.direction = lang === 'en'? 'ltr' : 'rtl'
    })
  }

}
