import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonComponent } from './simpson.component';

describe('SimpsonComponent', () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsonComponent]
    });
    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should return p=16.0 if x0=0, x1=4, num_seg=4, ERROR=0.0001 and f(x)=2x', () => {
    const area = component.calcularAreaSimpson(component.f2x, 0, 4, 4, 0.0001);
    expect(area).toBeCloseTo(16.0, 1);
  });
  
  it('Should return p=0.3333 if x0=0, x1=1, num_seg=4, ERROR=0.0001 and f(x)=x^2', () => {
    const area = component.calcularAreaSimpson(component.fx2, 0, 1, 4, 0.0001);
    expect(area).toBeCloseTo(0.3333, 4);
  });
  
  it('Should return p=1.38 if x0=1, x1=4, num_seg=6, ERROR=0.001 and f(x)=1/x', () => {
    const area = component.calcularAreaSimpson(component.f1_x, 1, 4, 6, 0.001);
    const expectedValue = 1.38; 
    const tolerance = 0.01;
  
    expect(area).toBeGreaterThanOrEqual(expectedValue - tolerance);
    expect(area).toBeLessThanOrEqual(expectedValue + tolerance);
  });
});
