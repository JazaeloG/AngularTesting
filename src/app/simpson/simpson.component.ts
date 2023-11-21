import { Component } from '@angular/core';
import { Calculate } from '../operations/calculos';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css'],
})
export class SimpsonComponent {
  funcion: string = '';
  x0: number = 0;
  x1: number = 0;
  numSegmentos: number = 0;
  dof: number = 0;
  resultadoSimpson: number | null = null;
  probabilidadTStudent: number | null = null;
  activarDof: boolean = false;
  
  calculate = new Calculate();

  constructor() {
    this.resultadoSimpson = null;
    this.probabilidadTStudent = null;
    this.activarDof = false;
  }

  calcularSimpson(): void {
    console.log('Calculando Simpson');
    console.log('Función:', this.funcion);
    console.log('X0:', this.x0);
    console.log('X1:', this.x1);
    console.log('Num Segmentos:', this.numSegmentos);
  
    const funcion = (x: number) => this.evaluarFuncion(this.funcion, x);
    this.resultadoSimpson = this.simpson(funcion, this.x0, this.x1, this.numSegmentos);
    console.log('Resultado Simpson:', this.resultadoSimpson);
  }
  
  evaluarFuncion(expresion: string, x: number): number {
    const partes = expresion.split('*');
    const coeficiente = parseFloat(partes[0]);
    return coeficiente * x;
  }

  calcularTStudent(): void {
    if (this.resultadoSimpson !== null) {
      this.probabilidadTStudent = this.tProbability(this.resultadoSimpson, this.dof);
      console.log(`Probabilidad T-Student: ${this.probabilidadTStudent}`);
    }
  }

  simpson(funcion: (x: number) => number, a: number, b: number, numSegmentos: number): number {
    let w: number = (b - a) / numSegmentos;
    let resultado: number = funcion(a) + funcion(b); 

    for (let i = 1; i < numSegmentos; i++) {
      if (i % 2 === 0) {
        resultado += 2 * funcion(a + i * w); 
      } else {
        resultado += 4 * funcion(a + i * w); 
      }
    }

    return (w / 3) * resultado;
  }

  calcularDistributionTStudent(t: number, dof: number): number {
    const numerator = this.calculate.calcularGamma((dof + 1) / 2);
    const denominator = Math.sqrt(dof * Math.PI) * this.calculate.calcularGamma(dof / 2);
    return (numerator / denominator) * (1 / (1 + t * t / dof) ** ((dof + 1) / 2));
  }

  tProbability(x: number, dof: number, numSegmentos: number = 100): number {
    if (this.funcion !== '') {
      
      return this.simpson((t) => this.calcularDistributionTStudent(t, dof), 0, x, numSegmentos);
    } else {
     
      return this.calculateDistributionTStudent(x, dof);
    }
  }

  calculateDistributionTStudent(t: number, dof: number): number {
    const numerator = this.calculate.calcularGamma((dof + 1) / 2);
    const denominator = Math.sqrt(dof * Math.PI) * this.calculate.calcularGamma(dof / 2);
    return (numerator / denominator) * (1 / (1 + t * t / dof) ** ((dof + 1) / 2));
  }
}
