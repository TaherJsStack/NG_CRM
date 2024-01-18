import { CustomersService } from '../services';
import { OrderUserNamePipe } from './order-user-name.pipe';

describe('OrderUserNamePipe', () => {

  let customersService: CustomersService
  
  it('create an instance', () => {
    const pipe = new OrderUserNamePipe(customersService as CustomersService);
    expect(pipe).toBeTruthy();
  });
});
