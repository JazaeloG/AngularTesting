import { Component } from '@angular/core';
import { Calculate } from '../operations/calculos';
import { MediasService } from '../services/medias.service';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent {
  numeros: string = '';
  media: number | null = null;
  desviacion: number | null = null;
  proxySizeStdDev: number = 0;
  devHoursStdDev: number = 0;
  calculate = new Calculate();

  constructor(private mediasService: MediasService) {}

  ngOnInit() {
    this.calculateProxySizeStandardDeviation();
    this.calculateDevHoursStandardDeviation();
  }

  calculateProxySizeStandardDeviation() {
    this.mediasService.getProxySize().subscribe(data => {
      const mean = this.calculate.calculateMedia(data);
      this.proxySizeStdDev = this.calcularDesviacionEstandar(data);
    });
  }

  calculateDevHoursStandardDeviation() {
    this.mediasService.getDevHours().subscribe(data => {
      const mean = this.calculate.calculateMedia(data);
      this.devHoursStdDev = this.calcularDesviacionEstandar(data);
    });
  }

  agregarNumeros() {
    const numerosArray = this.numeros.split(',').map(num => +num.trim());
    this.media = this.calculate.calculateMedia(numerosArray);
    this.desviacion = this.calcularDesviacionEstandar(numerosArray);
  }

  calcularDesviacionEstandar(data: number[]): number {
    const mean = this.calculate.calculateMedia(data);
    const squaredDifferences = data.map(val => Math.pow(val - mean, 2));
    const meanOfSquaredDifferences = this.calculate.calculateMedia(squaredDifferences);
    const stdDev = Math.sqrt(meanOfSquaredDifferences);
    return stdDev;
  }
}
