import { Component, EventEmitter, OnDestroy, OnInit, Output, Inject } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { MatBadgeModule }   from '@angular/material/badge';
import { MatIconModule }    from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule }  from '@angular/material/button';
import { MatRippleModule }  from '@angular/material/core';

import { LanguageService, ThemeService } from '../../services/app';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatRippleModule,
  ],
})
export class NavComponent implements OnInit, OnDestroy {

  @Output() asideMenu = new EventEmitter<boolean>();
  private subscription: Subscription = new Subscription;

  langValue: string = 'en';
  isDarkTheme: boolean = true;
  itemsCount$: Observable<number> = new Observable;

  constructor( 
    @Inject(DOCUMENT) private document: Document,
    private translate:       TranslateService,
    private themeService:    ThemeService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {}

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkTheme = !this.isDarkTheme
  }

  toggleLanguage(){
    this.langValue = this.langValue == 'ar' ? 'en' : 'ar'
    this.translate.use(this.langValue); 
    this.document.body.dir              = this.langValue == 'en' ? 'ltr'  : 'rtl';
    this.document.documentElement.dir   = this.langValue == 'en' ? 'ltr'  : 'rtl'; 
    this.document.documentElement.lang  = this.langValue == 'en' ? 'en'   : 'ar'; 
    localStorage.setItem('language', this.langValue)
    this.languageService.setLanguage(this.langValue)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

