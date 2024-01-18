import { Component, EventEmitter, OnDestroy, OnInit, Output, Inject } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NgClass, NgFor, NgIf, CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { LanguageService, ThemeService } from '../../services/app';
import { DOCUMENT } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import {MatRippleModule} from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';

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

  itemsCount$: Observable<number> = new Observable;
  langValue: string = 'en'
  private subscription: Subscription = new Subscription;

  isDarkTheme: boolean = true

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

