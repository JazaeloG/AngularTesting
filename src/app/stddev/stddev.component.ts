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
  mediaValue: number | null = null; // Cambiado el nombre de la propiedad para evitar conflicto
  desviacion: number | null = null;
  proxySizeStdDev: number = 0;
  devHoursStdDev: number = 0;
  calculate = new Calculate();
  myx: number[] = [];
  result: number | null = null;

  constructor(private mediasService: MediasService) {}

  ngOnInit() {
    this.calculateProxySizeStandardDeviation();
    this.calculateDevHoursStandardDeviation();
  }

  calculateProxySizeStandardDeviation() {
    this.mediasService.getProxySize().subscribe(data => {
      this.proxySizeStdDev = this.calcularDesviacionEstandar(data);
    });
  }

  calculateDevHoursStandardDeviation() {
    this.mediasService.getDevHours().subscribe(data => {
      this.devHoursStdDev = this.calcularDesviacionEstandar(data);
    });
  }

  agregarNumeros() {
    const numerosArray = this.numeros.split(',').map(num => +num.trim());
    this.mediaValue = this.calculate.calculateMedia(numerosArray);
    this.desviacion = this.calcularDesviacionEstandar(numerosArray);
  }

  calcularDesviacionEstandar(data: number[]): number {
    const mean = this.calculate.calculateMedia(data);
    const squaredDifferences = data.map(val => Math.pow(val - mean, 2));
    const meanOfSquaredDifferences = this.calculate.calculateMedia(squaredDifferences);
    const stdDev = Math.sqrt(meanOfSquaredDifferences);
    return stdDev;
  }

  agregar() {
    const numbers = JSON.parse(this.numeros);
    const isValidArray =
      Array.isArray(numbers) && numbers.every((num) => !isNaN(Number(num)));

    if (isValidArray) {
      this.myx = numbers;
    } else {
      this.myx = [NaN];
    }
  }

  calcularMedia() {
    const mean = this.calculate.calculateMedia(this.myx);
    this.result = mean;
  }

  calcularDesviacion() {
    const mean = this.calculate.calculateMedia(this.myx);
    const result = this.calcularDesviacionEstandar(this.myx);
    this.result = result;
  }
}
