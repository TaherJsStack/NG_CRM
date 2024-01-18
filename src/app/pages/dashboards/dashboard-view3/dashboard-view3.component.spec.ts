import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardView3Component } from './dashboard-view3.component';

describe('DashboardView3Component', () => {
  let component: DashboardView3Component;
  let fixture: ComponentFixture<DashboardView3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardView3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardView3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
