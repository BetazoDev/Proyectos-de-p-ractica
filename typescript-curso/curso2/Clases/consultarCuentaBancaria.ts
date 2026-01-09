import { CuentaBancaria } from "./cuenta";

let miCuenta = new CuentaBancaria ("Humberto Alonso", 1500);
miCuenta.depositar(267)
console.log(miCuenta.consultarSaldo())