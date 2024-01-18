import { OrderProductModel } from "./order-product";

export interface OrderModel {
    OrderId:      number,
    OrderDate:    string, 
    UserId:       string, 
    PaymentType:  string,
    Products:[    OrderProductModel ], 
  }

