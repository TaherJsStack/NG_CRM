import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from "@angular/router/testing";
import { NavItemsListModel } from '../../models';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Observable, of, Subject } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  let service: CartService;
  let mockService: CartServiceStub;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports:[
        SharedModule, 
        RouterTestingModule,
        HttpClientTestingModule, 
      ],
      providers: [
        Location,
        { provide: CartService, useClass: CartServiceStub },      
        // { provide: Router, useValue: routerSpyObj }

      ],

    }).compileComponents()
      fixture = TestBed.createComponent(NavComponent);
      component = fixture.componentInstance;
      // service = TestBed.inject(CartService);
      // mockService = TestBed.inject(CartService) as CartServiceStub;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('TEST HTML CONTENT ', () => {
    
    it('should check mat-toolbar element exists', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('mat-toolbar')).toBeTruthy();
    });

    it('should be count of 4 buttons', async () => {

      fixture.detectChanges();
      await fixture.whenStable();
      // Arrange
      const obj: NavItemsListModel[] =  [
        {title: 'Products', path: '/'},
        {title: 'Orders', path: '/orders'},
      ]
      // Act
      component.navListItems = obj, 
      fixture.detectChanges();
      let navButons = fixture.nativeElement.querySelectorAll('mat-toolbar button');
      // Assert
      expect(navButons.length).toEqual(4);

    });

    it('should be navigate buttons', async () => {
      fixture.detectChanges();
      await fixture.whenStable();
      const compiled = TestBed.get<Location>(Location)
      expect(compiled.path().concat('Products')).toBe('Products');
    });
        
  })

  describe('TEST NAVIGATION BUTTONS', () => {
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    let navigateSpy: jasmine.Spy;
    // let router: Router;

    // it('should be navigate to product', async () => {
    //   // let skillCount = fixture.nativeElement.query(By.css('footer')).nativeElement;
    //   // let navButons = fixture.nativeElement.querySelectorAll('mat-toolbar button');
    //   // navButons[0].click()
    //   // fixture.detectChanges();
    //   // await fixture.whenStable();
    //   // expect(navigateSpy).toHaveBeenCalledWith(['/Products']);
    // });
    it('should be navigate to orders', async () => {
      fixture.detectChanges();
      await fixture.whenStable();
    });
    it('should be navigate to cart', async () => {
      fixture.detectChanges();
      await fixture.whenStable();
    });
    it('should navigate to a specific route', () => {
      const route = 'product/123';
      // service.navigateTo(route);
  
      // expect(routerSpy.navigate).toHaveBeenCalledWith([route]);
    });
    it('should navigate to the given route', () => {
      const route = '/products';
      // component.navigateToProducts();
      // expect(navigateSpy).toHaveBeenCalledWith([route]);
    });

  })


  // describe('TEST TS LOGIC', () => {

  //   it('should return the cart items count as an observable', (done) => {
      
  //   });

  // })



});

class CartServiceStub {
  private cardProductsCount = new Subject<number>();
  updateValue(val: number) {
    this.cardProductsCount.next(0);
  }
  
  getProductsCount(): Observable<number> {
    return of(5);
  }
}