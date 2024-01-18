import { TestBed } from '@angular/core/testing';

import { CustomersService } from './customers.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserModel } from '../../models/user';

describe('CustomersService', () => {
  let service: CustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get customers list', () => {
    service.getCustomersList()
    service.data$.subscribe(res => {
      expect(res).toEqual([]);
    })
  });
});
