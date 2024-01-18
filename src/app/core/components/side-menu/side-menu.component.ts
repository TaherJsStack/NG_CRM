import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, Input, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatAccordion, MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UsersService } from '../../services';
import { UserModel } from '../../models/index';
import { RoleEnum } from '../../enums/index';
import { ISideList } from '../models/nav.interface';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [
    MatListModule,
    MatExpansionModule,
    RouterModule,
    TranslateModule,
    MatButtonModule,
    CommonModule,
    FormsModule
  ]
})
export class SideMenuComponent implements OnInit {
  // @ViewChild('accordion') accordion!: MatAccordion 
  @Input()  asideMenuState: any;
  @Output() asideMenu = new EventEmitter<boolean>();
  user:     UserModel = {} as UserModel;

  roleEnum        = RoleEnum
  // panelOpenState  = false;

  panelOpenState: boolean = false;

  activePanel: { outerIndex: number, innerIndex: number } = { outerIndex: -1, innerIndex: -1 };

  toggleAccordion(outerIndex: number, innerIndex: number): void {
    if (this.activePanel.outerIndex === outerIndex && this.activePanel.innerIndex === innerIndex) {
      this.activePanel = { outerIndex: -1, innerIndex: -1 }; // Collapse the current panel if clicked again
    } else {
      this.activePanel = { outerIndex, innerIndex };
    }
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  sideList: ISideList[] = [
    {
      sectioneTitle: 'MENU',
      accordionItems: [
        {title: 'SideMenu.Dashboards', icon:"fa fa-tachometer", items: [
          {elementTitel: 'SideMenu.DashboardView1', icon:"fa fa-tachometer", path: '/dashboards/dashboard-view1'},
          {elementTitel: 'SideMenu.DashboardView2', icon:"fa fa-tachometer", path: '/dashboards/dashboard-view2'},
          {elementTitel: 'SideMenu.DashboardView3', icon:"fa fa-tachometer", path: '/dashboards/dashboard-view3'},
        ]
      },
      {title: 'SideMenu.DataList', icon:"fa fa-users", items: [
          {elementTitel: 'SideMenu.Bootstrap',  icon:"fa fa-database", path: '/data-list/bootstrap'},
          {elementTitel: 'SideMenu.NgMaterial', icon:"fa fa-database", path: '/data-list/ng-material'},
          {elementTitel: 'SideMenu.Custom',     icon:"fa fa-database", path: '/data-list/custom'},
          {elementTitel: 'SideMenu.Primeng',     icon:"fa fa-database", path: '/data-list/primeng'},
        ]
      },
      {title: 'SideMenu.Forms', icon:"fa fa-users", items: [
          {elementTitel: 'SideMenu.Bootstrap',  icon:"fa fa-database",    path: '/forms/bootstrap'},
          {elementTitel: 'SideMenu.NgMaterial', icon:"fa fa-plus-square", path: '/forms/ng-material'},
          {elementTitel: 'SideMenu.Custom',     icon:"fa fa-plus-square", path: '/forms/custom'},
        ]
      },
      ],
    },
    {
      sectioneTitle: 'PAGES',
      accordionItems: [
        {
          title: 'title', 
          icon: 'string', 
          count: 1, 
          items: [
            {
              elementTitel: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitel: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitel: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
          ]
        },
      ],
      item:[
        {
          elementTitel: 'string 0', 
          icon: 'string', 
          path: 'string', 
          count: 0
        },
        {
          elementTitel: 'string 1', 
          icon: 'string', 
          path: 'string', 
          count: 0
        },
        {
          elementTitel: 'string 2', 
          icon: 'string', 
          path: 'string', 
          count: 0
        },
      ],
    },
    {
      sectioneTitle: 'COMPONENTS',
      accordionItems: [
        {
          title: 'title', 
          icon: 'string', 
          count: 1, 
          items: [
            {
              elementTitel: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitel: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitel: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
          ]
        },
        {
          title: 'title', 
          icon: 'string', 
          count: 1, 
          items: [
            {
              elementTitel: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitel: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitel: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
          ]
        },
        {
          title: 'title', 
          icon: 'string', 
          count: 1, 
          items: [
            {
              elementTitel: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitel: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitel: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
          ]
        },
      ]
    }
  ]

  constructor(
    private usersService: UsersService,
    private router: Router,
  ) { }

  async ngOnInit() {

    console.log('asideMenuState ->', this.asideMenuState)
    this.getUserData()
    // used when use logout
    // this.usersService.isLogin.subscribe(res => {
    //   if (!res) {
    //     this.router.navigateByUrl('/pageslogin');
    //   }
    // })

  }

  getUserData(){
    // if ('fullInfo' in localStorage) {
    //   this.user = JSON.parse(localStorage.getItem("fullInfo") as string)
    // } else {
    //   this.router.navigateByUrl('/pageslogin');
    // }
  }

  onLogOut(){
    this.usersService.logout()
  }

  toggelSideMenuOnMobile(){
    if (window.innerWidth < 1000 ) {
      this.asideMenu.emit(true)
    }
  }

}
