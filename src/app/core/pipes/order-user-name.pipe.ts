import { OnInit, Pipe, OnDestroy, PipeTransform } from '@angular/core';
import { CustomersService } from '../services';

@Pipe({
  name: 'orderUserName'
})
export class OrderUserNamePipe implements PipeTransform, OnInit, OnDestroy{

  constructor(
    private CustomersService: CustomersService
  ) { }

  transform(value: string): unknown {
    let userName = this.CustomersService.getUserNameByUserId(value)
    return userName;
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {}

}
