import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('TEST HTML CONTENT ', () => {
    
    it('should check p element exists', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('p')).toBeTruthy();
    });

    it('should check p text content exists', () => {
      const footer = fixture.componentInstance;
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('p')?.textContent).toContain(footer.footerText);
    });
    
  })

});
