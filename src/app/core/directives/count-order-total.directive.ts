import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductModel } from '../models';
import { OrderProductModel } from '../models/order-product';


@Directive({
  selector: '[appCountOrderTotal]'
})
export class CountOrderTotalDirective implements OnInit{

  @Input() products: OrderProductModel[] = [];

  orderProducts:  ProductModel[]  = [];

  constructor(
    private elementRef:       ElementRef, 
    private renderer:         Renderer2
  ) { }

  ngOnInit(): void {
    if (this.products.length) {
      this.getOrderProductsIds(this.products)
    }
  }

  getOrderProductsIds(products: OrderProductModel[]) {
    let idsList = products.map(product => product.ProductId)
    if (idsList.length) {
      this.getOrderProductsByIds(idsList)
    }
  }

  getOrderProductsByIds(orderProductsIdsList: number[]) {
    // this.ProductsService.getOrderProductsByIdsList(orderProductsIdsList).subscribe(res => {
    //   if (res.length) {
    //     this.joinquantityToEachPorduct(res)
    //   }
    // })
  }

  joinquantityToEachPorduct(_orderProduct: ProductModel[]) {
    let newProductsList   = _orderProduct.map(orderProduct => {
      const foundProduct  = this.products.find(foundOrderProduct => foundOrderProduct.ProductId === orderProduct.ProductId);
      return { ...orderProduct, ...foundProduct };
    })
    this.calcOrderTotal(newProductsList)
  }

  calcOrderTotal(newProductsList: ProductModel[]) {
    let total = newProductsList.reduce((acc, curr) => {
      return acc + curr.Quantity * curr.ProductPrice;
    },0)
     if (this.isFloat(total) && total.toString().split(".")[1].length > 1) {
      total = +total.toFixed(4)
    }
    this.renderer.setProperty(this.elementRef.nativeElement, 'textContent', total);
  }

  // check total isFloat
  isFloat(x: number) { return !!(x % 1); }


}
