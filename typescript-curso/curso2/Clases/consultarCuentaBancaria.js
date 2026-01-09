"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cuenta_1 = require("./cuenta");
let miCuenta = new cuenta_1.CuentaBancaria("Humberto Alonso", 1500);
miCuenta.depositar(267);
console.log(miCuenta.consultarSaldo());
