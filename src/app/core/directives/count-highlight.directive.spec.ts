import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatModule } from '../shared';
import { SharedModule } from '../shared/shared.module';
import { CountHighlightDirective } from './count-highlight.directive';
import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import { ProductCardComponent } from 'src/app/pages/products/components';


describe('CountHighlightDirective', () => {

  let elementRef: ElementRef | any = ElementRef;
  let fixture: ComponentFixture<any>;
  let component: ProductCardComponent;
  let directive = new CountHighlightDirective(new elementRef);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountHighlightDirective, component],
      // Other necessary imports, providers, and configurations
      imports: [
        SharedModule,
        MatModule
      ]
    });

    // fixture = TestBed.createComponent(ProductCardComponent); // Create a test component
    // directive = fixture.debugElement.query(By.directive(CountHighlightDirective)).injector.get(directive);
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ProductCardComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create an instance', () => {
    // const directive = new CountHighlightDirective(); 
    expect(directive).toBeTruthy();
  });
});
