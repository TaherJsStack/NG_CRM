import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Am5ChartComponent } from './am5-chart.component';

describe('Am5ChartComponent', () => {
  let component: Am5ChartComponent;
  let fixture: ComponentFixture<Am5ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Am5ChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Am5ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
