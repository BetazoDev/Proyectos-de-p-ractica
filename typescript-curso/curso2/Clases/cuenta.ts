// La Clase CuentaBancaria:
// En un archivo cuenta.ts, crea una clase CuentaBancaria.
// Propiedades: titular (string) y saldo (number).
// Constructor para inicializar ambas.
// Método depositar(cantidad: number): que sume la cantidad al saldo.
// Método consultarSaldo(): que retorne un string con el saldo actual.

export class CuentaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(cantidad: number)  {
        this.saldo = cantidad + this.saldo;
    }
    consultarSaldo(): string {
         return `Hola, ${this.titular} Tu saldo actual es ${this.saldo}`
    }
    
}







