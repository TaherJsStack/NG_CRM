import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

import { IUserModel } from '../../../core/models';

import { select, Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { 
  getApiError, 
  getApiLoading, 
  userEntities,
  UserActions, 
  fetchUsersListPaginationSuccess 
} from '../../../Store';

@Component({
  selector: 'app-dashboard-view3',
  templateUrl: './dashboard-view3.component.html',
  styleUrls: ['./dashboard-view3.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    MatFormFieldModule,
    RouterModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class DashboardView3Component {

  displayedColumns: string[] = ['_id', 'name', 'imgPath', 'email', 'createdAt', 'action'];
  
  usersList: IUserModel[] = [] 
  dataSource = new MatTableDataSource<IUserModel>(this.usersList);
  
  @ViewChild(MatPaginator, { static : true}) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  
  length          = 0;
  pageSize        = 10;
  pageIndex       = 1;
  pageSizeOptions = [5, 10, 25, 50, 100];
  showFirstLastButtons = true;
  
  error$:        Observable<HttpErrorResponse | undefined>  = this.store.pipe(select(getApiError));
  isLoading$:    Observable<boolean | undefined>            = this.store.pipe(select(getApiLoading));
  userEntities$: Observable<IUserModel[]>                    = this.store.pipe(select(userEntities))
  
  constructor(
    // public  dialog: MatDialog,
    private store: Store,
  ) {

    this.store.pipe(select(userEntities)).subscribe(res => {
      if (!res.length) {
        this.store.dispatch(UserActions.fetchUsersListStart());
      }
    })
    
  }
  
  ngOnInit(): void { 
    this.subscribeUserDataList()
  }
  
  ngAfterViewInit() { }
  
  subscribeUserDataList() {
    this.store.dispatch(UserActions.fetchUsersListPagination({ pageNo:this.pageIndex, pageSize: this.pageSize}));
    this.store.pipe(select(fetchUsersListPaginationSuccess)).subscribe(res => {
      this.dataSource = new MatTableDataSource(res.data);
      this.pageIndex  = res.selectedPageNo;
      this.pageIndex  = res.selectedPageSize
      this.length     = res.totalItems
    });
  }
  
  paginatorPageEvent(event: PageEvent) {
    this.pageIndex  = event.pageIndex + 1;
    this.length     = event.length;
    this.pageSize   = event.pageSize;
    this.store.dispatch(UserActions.fetchUsersListPagination({ pageNo:this.pageIndex, pageSize: this.pageSize}));
  }

  confirmDelete(id: number, name: string): void {
    // const dialogRef = this.dialog.open(DialogComponent,{
    //   data: {type:'delete', name: 'Delete', message: `Would you like to delete ${ name }`,},
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.delete(id)
    //   }
    // });
  }

  delete(id: number){
    this.store.dispatch(UserActions.deleteUser({ id }));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}

