import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataListInterface } from '../models/data-list';

import { environment } from '../../../environments/environment';
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
   * @returns Observable<dataListInterface[]>
   */
  getDataList(): Observable<DataListInterface[]> {
    console.log('`${this.baseAPI}data.json` ', `${this.baseAPI}data.json`)
    return this.http
      .get<DataListInterface[]>(`${this.baseAPI}data.json`).pipe(map(item => {
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
