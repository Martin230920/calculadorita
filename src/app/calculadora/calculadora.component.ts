import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  currentValue: string = '';
  operand1: number = 0;
  operand2: number = 0;
  operator: string = '';

  clear() {
    this.currentValue = '';
    this.operand1 = 0;
    this.operand2 = 0;
    this.operator = '';
  }

  appendValue(value: string) {
    if (value === '.' && this.currentValue.includes('.')) {
      return;
    }

    if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (this.currentValue !== '' && this.operator === '') {
        this.operand1 = parseFloat(this.currentValue);
        this.operator = value;
        this.currentValue = '';
      } else {
        this.calculate();
        this.operator = value;
      }
    } else {
      this.currentValue += value;
    }
  }

  
  calculate() {
    if (this.operator === '' || this.currentValue === '') {
      return;
    }

    this.operand2 = parseFloat(this.currentValue);

    let result: number;
    switch (this.operator) {
      case '+':
        result = this.operand1 + this.operand2;
        break;
      case '-':
        result = this.operand1 - this.operand2;
        break;
      case '*':
        result = this.operand1 * this.operand2;
        break;
      case '/':
        if (this.operand2 === 0) {
          this.currentValue = 'Error: División por cero';
          return;
        }
        result = this.operand1 / this.operand2;
        break;
      default:
        result = 0;

    }

    

    this.currentValue = result.toString();
    this.operand1 = result;
    this.operand2 = 0;
    this.operator = '';
  }
  operacion(op: string) {
    let result: number;
    const operando = parseFloat(this.currentValue);
  
    switch (op) {
      case 'sqrt':
        result = Math.sqrt(operando);
        break;
      case 'sin':
        result = Math.sin(operando);
        break;
      case 'cos':
        result = Math.cos(operando);
        break;
      case 'tan':
        result = Math.tan(operando);
        break;
      case 'rad':
        result = operando * (Math.PI / 180);
        break;
      case 'log':
        result = Math.log10(operando);
        break;
      case 'pow':
        const base = operando;
        const exponente = prompt('Ingrese el exponente:', '2');
        if (exponente !== null) {
          result = Math.pow(base, parseFloat(exponente));
        } else {
          result = base; // O cualquier otro valor que desees asignar en caso de cancelar
        }
        break;
      default:
        result = 0;
    }
  
    this.currentValue = result.toString();
  }
}