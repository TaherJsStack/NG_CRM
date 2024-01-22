import { IOrderIProductModel } from "./order-product.interface";

export interface IOrderModel {
    OrderId:      number,
    OrderDate:    string, 
    UserId:       string, 
    PaymentType:  string,
    Products:[    IOrderIProductModel ], 
  }

