import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { MediasService } from '../services/medias.service';
import { HttpClientModule } from '@angular/common/http';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let service: MediasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediasService],
      declarations: [StddevComponent],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(MediasService);
    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate the standard deviation correctly for ProxySize', () => {
    const mockData = [160,
      591,
      114,
      229,
      230,
      270,
      128,
      1657,
      624,
      1503]; 
    const expectedMean = 550.6; 
    const expectedStdDev = 542.6723136479325;

    const mean = service.calcularMedia(mockData);
    const stdDev = service.calcularDesviacionEstandar(mockData, mean);

    expect(stdDev).toEqual(expectedStdDev);
  });

  it('should calculate the standard deviation correctly for DevHours', () => {
    const mockData = [15,
      69.9,
      6.5,
      22.4,
      28.4,
      65.9,
      19.4,
      198.7,
      38.8,
      138.2]; 
    const expectedMean = 30; 
    const expectedStdDev = 59.06106670218546; 

    const mean = service.calcularMedia(mockData);
    const stdDev = service.calcularDesviacionEstandar(mockData, mean);

    expect(stdDev).toEqual(expectedStdDev);
  });
});
