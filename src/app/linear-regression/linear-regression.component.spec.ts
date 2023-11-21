import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LinearRegressionComponent } from './linear-regression.component';
import { LinearRegressionService } from '../services/linear-regression.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;
  let service: LinearRegressionService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [LinearRegressionComponent],
      providers: [LinearRegressionService],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LinearRegressionService);
    fixture.detectChanges();
  });

  const test1Data = {
    proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
  };

  const test2Data = {
    proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
    actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
  };

  const test3Data = {
    plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
  };

  const test4Data = {
    plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
    actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
  };

  it('should return B1 = 1.7279 with test1 json', () => {
    spyOn(service, 'getTest1').and.returnValue(of(test1Data));
    component.fetchDataForRoute(1);
    const result = component.calculateB1();
    expect(result).toBeCloseTo(1.7279, 4);
  });

  it('should return B0 = -22.5525 with test1 json', () => {
    spyOn(service, 'getTest1').and.returnValue(of(test1Data));
    component.fetchDataForRoute(1);
    const result = component.calculateB0();
    expect(result).toBeCloseTo(-22.5525, 4);
  });

  it('should return y = 644.429 if x = 386 with test1 json', () => {
    spyOn(service, 'getTest1').and.returnValue(of(test1Data));
    component.fetchDataForRoute(1);
    const result = component.calculateY(386);
    expect(result).toBeCloseTo(644.429, 3);
  });

  it('should return B1 = 0.1681 with test2 JSON', () => {
    spyOn(service, 'getTest2').and.returnValue(of(test2Data));
    component.updateData(2);
    const result = component.calculateB1();
    expect(result).toBeCloseTo(0.1681, 4);
  });

  it('should return B0 = -4.039 with test2 JSON', () => {
    spyOn(service, 'getTest2').and.returnValue(of(test2Data));
    component.updateData(2);
    const result = component.calculateB0();
    expect(result).toBeCloseTo(-4.039, 3);
  });

  it('should return y = 60.858 if x = 386 with2 test JSON', () => {
    spyOn(service, 'getTest2').and.returnValue(of(test2Data));
    component.updateData(2);
    const result = component.calculateY(386);
    expect(result).toBeCloseTo(60.858, 3);
  });

  it('should return B1 = 1.43097 with test3 JSON', () => {
    spyOn(service, 'getTest3').and.returnValue(of(test3Data));
    component.updateData(3);
    const result = component.calculateB1();
    expect(result).toBeCloseTo(1.43097, 5);
  });

  it('should return B0 = -23.92 with test3 JSON', () => {
    spyOn(service, 'getTest3').and.returnValue(of(test3Data));
    component.updateData(3);
    const result = component.calculateB0();
    expect(result).toBeCloseTo(-23.92, 2);
  });

  it('should return y = 528.4294 if x = 386 with3 test JSON', () => {
    spyOn(service, 'getTest3').and.returnValue(of(test3Data));
    component.updateData(3);
    const result = component.calculateY(386);
    expect(result).toBeCloseTo(528.4294, 4);
  });

  it('should return B1 = 0.140164 with test4 JSON', () => {
    spyOn(service, 'getTest4').and.returnValue(of(test4Data));
    component.updateData(4);
    const result = component.calculateB1();
    expect(result).toBeCloseTo(0.140164, 6);
  });

  it('should return B0 = -4.604 with test4 JSON', () => {
    spyOn(service, 'getTest4').and.returnValue(of(test4Data));
    component.updateData(4);
    const result = component.calculateB0();
    expect(result).toBeCloseTo(-4.604, 3);
  });

  it('should return y = 49.4994 if x = 386 with test4 JSON', () => {
    spyOn(service, 'getTest4').and.returnValue(of(test4Data));
    component.updateData(4);
    const result = component.calculateY(386);
    expect(result).toBeCloseTo(49.4994, 4);
  });

  it('should calculate and display Y value on button click', fakeAsync(() => {
    component.lista1String = '1,2,3';
    component.lista2String = '4,5,6';
    component.inputX = 2;
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    tick();
    fixture.detectChanges();

    const resultElement = fixture.nativeElement.querySelector('div > p');
    expect(resultElement.textContent).toContain('Valor Y Calculado');
  }));

  it('should update B0 and B1 on button click', fakeAsync(() => {
    component.lista1String = '1,2,3';
    component.lista2String = '4,5,6';
    component.inputX = 2;
    fixture.detectChanges();
  
    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    tick();
    fixture.detectChanges();
  
    const b0Element = fixture.nativeElement.querySelector('div p:nth-child(2)');
    expect(b0Element.textContent).toContain('B0:');
  
    const b1Element = fixture.nativeElement.querySelector('div p:nth-child(3)');
    expect(b1Element.textContent).toContain('B1:');
  }));
  

  it('should display correlation value on button click', fakeAsync(() => {
    component.lista1String = '1,2,3';
    component.lista2String = '4,5,6';
    component.inputX = 2;
    fixture.detectChanges();
  
    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    tick();
    fixture.detectChanges();
  
    const correlationElement = fixture.nativeElement.querySelector('div p:last-child');
    expect(correlationElement.textContent).toContain('Correlación:');
  }));
  

});