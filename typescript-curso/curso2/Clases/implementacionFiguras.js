"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const figuras_1 = require("./figuras");
let area = new figuras_1.Cuadrado(25);
console.log(area.calcularArea());
let circunferencia = new figuras_1.Circulo(20);
console.log(circunferencia.calcularCircunferencia());
