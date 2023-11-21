import { evaluate } from 'mathjs';

export class Calculate {
  [x: string]: any;

  private b0: number = 0;
  private b1: number = 0;

  getB0(): number {
    return this.b0;
  }

  getB1(): number {
    return this.b1;
  }

  setB0B1(b0: number, b1: number): void {
    this.b0 = b0;
    this.b1 = b1;
  }
  
  evaluateExpression(expression: string, variables: any): number {
    const compiled = evaluate(expression);
    return compiled.evaluate(variables);
  }

  calcularCorrelacion(listaX: number[], listaY: number[]): number {
    const mediaX = this.calculateMedia(listaX);
    const mediaY = this.calculateMedia(listaY);

    const numerator = this.sumXY(listaX, listaY) - listaX.length * mediaX * mediaY;
    const denominatorX = this.sumXX(listaX) - listaX.length * Math.pow(mediaX, 2);
    const denominatorY = this.sumXX(listaY) - listaY.length * Math.pow(mediaY, 2);

    const correlation = numerator / Math.sqrt(denominatorX * denominatorY);

    return correlation;
  }

    sumX(lista: number[]): number {
        var sum = 0;
        console.log(lista);
        for (let i = 0; i < lista.length; i++) {
            sum += lista[i];
        }

        return sum;
    }

    sumXX(lista: number[]): number {
        var sum = 0;

        for (let i = 0; i < lista.length; i++) {
            sum += lista[i] * lista[i];
        }

        return sum;
    }

    sumXY(listaX: number[], listaY: number[]): number {
        var sum = 0;

        for (let i = 0; i < listaX.length; i++) {
            sum += listaX[i] * listaY[i];
        }

        return sum;
    }

    calculateB1(sumXY: number, sumX: number, sumY: number, sumXX: number, n: number): number {
        var b1 = 0;

        b1 = ((n * sumXY) - (sumX * sumY)) / ((n * sumXX) - (sumX * sumX));

        return b1;
    }

    calculateB0(sumX: number, sumY: number, b1: number, n: number): number {
        var b0 = 0;

        b0 = (sumY - (b1 * sumX)) / n;

        return b0;
    }

    calculateY(b0: number, b1: number, x: number): number {
        var y = 0;

        y = b0 + (b1 * x);

        return y;
    }

    calculateMedia(lista: number[]): number {
        var media = 0;
        var sum = this.sumX(lista);

        media = sum / lista.length;

        return media;
    }



    calcularGamma(z: number): number {
      if (Number.isInteger(z)) {
        let result = 1;
        for (let i = 1; i < z; i++) {
          result *= i;
        }
        return result;
      }
    
      let product = Math.sqrt(Math.PI);
    
      while (z > 0.5) {
        z -= 1;
        product *= z;
      }
    
      return product;
    }
    
}