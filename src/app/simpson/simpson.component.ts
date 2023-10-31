import { Component } from '@angular/core';
import { Calculate } from '../operations/calculos';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css'],
})
export class SimpsonComponent {
  calculate = new Calculate();


  calcularAreaSimpson(fx: (x: number) => number, x0: number, x1: number, seg: number, error: number): number {
    let a1 = 0;
    let a2 = 0;
    let c = 1;

    while (a1 === 0 || Math.abs(a2 - a1) > error || a2 === 0) {
      if (c === 1) {
        a1 = this.simpson(fx, x0, x1, seg);
      } else {
        if (a2 !== 0) {
          a1 = a2;
        }
        seg *= 2;
        a2 = this.simpson(fx, x0, x1, seg);
      }
      c += 1;
    }
    return a2;
  }

simpson(fx: (x: number) => number, x0: number, x1: number, seg: number): number {
    const w = (x1 - x0) / seg;
    let suma = fx(x0) + fx(x1);

    for (let i = 1; i < seg; i++) {
      const multiplo = i % 2 === 0 ? 2 : 4;
      suma += multiplo * fx(x0 + i * w);
    }

    return (w / 3) * suma;
  }
  
  f2x(x: number): number {
    return 2 * x;
  }

  fx2(x: number): number {
    return x * x;
  }

  f1_x(x: number): number {
    return 1 / x;
  }
}
