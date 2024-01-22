import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UsersService } from '../../services';
import { IUserModel } from '../../models/index';
import { RoleEnum } from '../../enums/index';
import { ISideList } from '../../models';

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
  user:     IUserModel = {} as IUserModel;

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
      sectionTitle: 'MENU',
      accordionItems: [
        {title: 'SideMenu.Dashboards', icon:"fa fa-tachometer", items: [
          {elementTitle: 'SideMenu.DashboardView1', icon:"fa fa-tachometer", path: '/pages/dashboards/dashboard-view1'},
          {elementTitle: 'SideMenu.DashboardView2', icon:"fa fa-tachometer", path: '/pages/dashboards/dashboard-view2'},
          {elementTitle: 'SideMenu.DashboardView3', icon:"fa fa-tachometer", path: '/pages/dashboards/dashboard-view3'},
        ]
      },
      {title: 'SideMenu.DataList', icon:"fa fa-users", items: [
          {elementTitle: 'SideMenu.Bootstrap',  icon:"fa fa-database", path: '/pages/data-list/bootstrap'},
          {elementTitle: 'SideMenu.NgMaterial', icon:"fa fa-database", path: '/pages/data-list/ng-material'},
          {elementTitle: 'SideMenu.Custom',     icon:"fa fa-database", path: '/pages/data-list/custom'},
          {elementTitle: 'SideMenu.Primeng',    icon:"fa fa-database", path: '/pages/data-list/primeng'},
        ]
      },
      {title: 'SideMenu.Forms', icon:"fa fa-users", items: [
          {elementTitle: 'SideMenu.Bootstrap',  icon:"fa fa-database",    path: '/pages/forms/bootstrap'},
          {elementTitle: 'SideMenu.NgMaterial', icon:"fa fa-plus-square", path: '/pages/forms/ng-material'},
          {elementTitle: 'SideMenu.Custom',     icon:"fa fa-plus-square", path: '/pages/forms/custom'},
        ]
      },
      ],
    },
    {
      sectionTitle: 'authentication',
      accordionItems: [],
      item:[
        {
          elementTitle: 'login', 
          icon: 'string', 
          path: '/authentication', 
          count: 0
        },
        {
          elementTitle: 'forgot password', 
          icon: 'string', 
          path: '/authentication/forgot', 
          count: 0
        },
        {
          elementTitle: 'reset password', 
          icon: 'string', 
          path: '/authentication/reset', 
          count: 0
        },
        {
          elementTitle: 'confirm password', 
          icon: 'string', 
          path: '/authentication/confirm', 
          count: 0
        },
      ],
    },
    {
      sectionTitle: 'errors',
      accordionItems: [],
      item:[
        {
          elementTitle: '404', 
          icon: 'string', 
          path: '/errors', 
          count: 0
        },
        {
          elementTitle: '500', 
          icon: 'string', 
          path: '/errors/500', 
          count: 0
        }
      ],
    },
    {
      sectionTitle: 'PAGES',
      accordionItems: [
        {
          title: 'title', 
          icon: 'string', 
          count: 1, 
          items: [
            {
              elementTitle: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitle: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitle: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
          ]
        },
      ],
      item:[
        {
          elementTitle: 'string 0', 
          icon: 'string', 
          path: 'string', 
          count: 0
        },
        {
          elementTitle: 'string 1', 
          icon: 'string', 
          path: 'string', 
          count: 0
        },
        {
          elementTitle: 'string 2', 
          icon: 'string', 
          path: 'string', 
          count: 0
        },
      ],
    },
    {
      sectionTitle: 'COMPONENTS',
      accordionItems: [
        {
          title: 'title', 
          icon: 'string', 
          count: 1, 
          items: [
            {
              elementTitle: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitle: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitle: 'string', 
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
              elementTitle: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitle: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitle: 'string', 
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
              elementTitle: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitle: 'string', 
              icon: 'string', 
              path: 'string', 
              count: 0
            },
            {
              elementTitle: 'string', 
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
