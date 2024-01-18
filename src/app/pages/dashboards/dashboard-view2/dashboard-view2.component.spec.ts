import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardView2Component } from './dashboard-view2.component';

describe('DashboardView2Component', () => {
  let component: DashboardView2Component;
  let fixture: ComponentFixture<DashboardView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardView2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
