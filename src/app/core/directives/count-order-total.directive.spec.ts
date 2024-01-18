import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsComponent } from 'src/app/pages/orders/order-details/order-details.component';
import { ProductsService } from '../services';
import { CountOrderTotalDirective } from './count-order-total.directive';

describe('CountOrderTotalDirective', () => {
  
  let http: HttpClient
  let productsService:  ProductsService;
  let elementRef:       ElementRef;
  let renderer:         Renderer2;

  let fixture: ComponentFixture<any>;
  // let directive= new CountOrderTotalDirective(new productsService, elementRef, renderer );


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountOrderTotalDirective],
      providers: [ActivatedRoute, HttpClientModule]

      // Other necessary imports, providers, and configurations
    });

    // fixture = TestBed.createComponent(OrderDetailsComponent); // Create a test component
    // directive = fixture.debugElement.query(By.directive(CountOrderTotalDirective)).injector.get(CountOrderTotalDirective);
  });
  it('should create an instance', () => {
    const directive = new CountOrderTotalDirective(productsService, elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
