import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, NavComponent, SideMenuComponent } from './core/components';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
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
