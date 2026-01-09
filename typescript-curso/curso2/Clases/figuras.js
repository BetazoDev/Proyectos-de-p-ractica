"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = exports.Cuadrado = void 0;
class Cuadrado {
    constructor(lado) {
        this.lado = lado;
    }
    calcularArea() {
        let area = this.lado * this.lado;
        return `El área de este cuadrado es ${area}`;
    }
}
exports.Cuadrado = Cuadrado;
class Circulo {
    constructor(radio) {
        this.radio = radio;
    }
    calcularCircunferencia() {
        const pi = 3.1416;
        let circunferencia = 2 * pi * this.radio;
        return `La circunferencia de este círculo es ${circunferencia}`;
    }
}
exports.Circulo = Circulo;
