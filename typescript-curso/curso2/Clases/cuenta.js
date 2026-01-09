"use strict";
// La Clase CuentaBancaria:
// En un archivo cuenta.ts, crea una clase CuentaBancaria.
// Propiedades: titular (string) y saldo (number).
// Constructor para inicializar ambas.
// Método depositar(cantidad: number): que sume la cantidad al saldo.
// Método consultarSaldo(): que retorne un string con el saldo actual.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaBancaria = void 0;
class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(cantidad) {
        this.saldo = cantidad + this.saldo;
    }
    consultarSaldo() {
        return `Hola, ${this.titular} Tu saldo actual es ${this.saldo}`;
    }
}
exports.CuentaBancaria = CuentaBancaria;
