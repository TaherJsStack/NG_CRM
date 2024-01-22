import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RoleEnum } from '../../enums';
import { IUserModel } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService implements OnInit {

  roleEnum = RoleEnum
  user:IUserModel = {} as IUserModel;

  constructor() { }

  ngOnInit(): void {
    this.getUserData()  
  }

  saveUserDataInLocalStorage(userRole: string, fullInfo: {} ) {

    localStorage.setItem('userId',    'userId');
    localStorage.setItem('token',     'token');
    localStorage.setItem('userRole',  userRole);
    localStorage.setItem('fullInfo',  JSON.stringify(fullInfo));
  }

  async getUserData():  Promise<IUserModel>{
    return new Promise( async (resolve, reject) => {
      if ('fullInfo' in localStorage) {      
        let user     = await localStorage.getItem("fullInfo")
        this.user = await JSON.parse(user as string) as IUserModel;
        return resolve(this.user as IUserModel)
      }
      reject()
    })
  }
  

  // /--------------------------------------------------------
  hasToken(): Observable<boolean> {
    // You can implement the logic to check the authentication state here
    // For example, you can check if the user has a valid token
    const token =  'token' in localStorage
    return of(token);
  }

  // Method to retrieve user roles from localStorage and check if any of the specified roles match
  userRole(): Observable<boolean> {
    const userRole: IUserModel = JSON.parse(localStorage.getItem("fullInfo") as string);
    if (userRole) {     
      return of(userRole.role === this.roleEnum.admin);
    }
    return of(false);
  }

  getRole(): Observable<string> {
    if ('userRole' in localStorage) {      
      const userRole = localStorage.getItem("userRole");
      if (userRole) {  
        return of(userRole);
      }
    }
    return of('0');
  }

  userPermeation(): Observable<number[]> {
    const userRole: IUserModel = JSON.parse(localStorage.getItem("fullInfo") as string);
    if (userRole) {     
      return of(userRole.permeation);
    }
    return of([]);
  }

    
}
