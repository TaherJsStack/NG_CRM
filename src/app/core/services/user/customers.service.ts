import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserModel } from '../../models/user';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CustomersService {
  private baseAPI = environment.baseAPI;
  private usersDataList: UserModel[] = []

  private dataSubject: BehaviorSubject<UserModel[]> = new BehaviorSubject<UserModel[]>([]);
  public  data$: Observable<UserModel[]> = this.dataSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getCustomersList() {
     this.http
      .get<UserModel[]>(`${this.baseAPI}users.json`).subscribe(res => {
        this.usersDataList = res
        this.shareUsersDataList(res)
      })
  }

  shareUsersDataList(usersList: UserModel[]) {
    this.dataSubject.next(usersList);
  }

  getUserNameByUserId(userId: string){
    return this.usersDataList.find(user => user.Id.toString() === userId.toString())?.Name || `Undefined User ${userId}`
  
    // return this.http
    // .get<UserModel[]>('assets/order-master-dp/users.json')
    // .pipe(
    //   map((res) => {
    //     return res.filter( user => user.Id === userId );
    //   })
    // ); 
  }

  // updateIdLength(id: string): string {
  //   return id.length > 15 ? id.slice(0,-1) : id
  // }


  getUserByUserId(userId: string): Observable<UserModel[]>  {
    // return this.usersDataList.find(user => user.Id === userId)
    return this.http
    .get<UserModel[]>(`${this.baseAPI}users.json`)
    .pipe(
      map((res) => {
        return res.filter( user => user.Id === userId );
      })
    ); 
  }

  
}
