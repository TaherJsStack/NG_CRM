import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loaderState = new Subject<boolean>();
  
  constructor() { }

  startLoaderState(state: boolean) {
    this.loaderState.next(state)
  }

}
