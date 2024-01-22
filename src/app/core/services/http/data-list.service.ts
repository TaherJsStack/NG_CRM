import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IDataListInterface } from '../../models';

import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataListService {
  
  private baseAPI = environment.baseAPI;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * getDataList
   * @returns Observable<IDataListInterface[]>
   */
  getDataList(): Observable<IDataListInterface[]> {
    console.log('`${this.baseAPI}data.json` ', `${this.baseAPI}data.json`)
    return this.http
      .get<IDataListInterface[]>(`${this.baseAPI}data.json`).pipe(map(item => {
        let x = item.map(i => {
          return {
            ...i,
            image2: '////////////////',
            image3: '0000000000',
          }
          
        })
        return x
      }))
    
  }


}
