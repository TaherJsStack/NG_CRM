import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardView1Component } from './dashboard-view1.component';

describe('DashboardView1Component', () => {
  let component: DashboardView1Component;
  let fixture: ComponentFixture<DashboardView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardView1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
