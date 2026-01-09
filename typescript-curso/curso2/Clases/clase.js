"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, edad, esDesarrolldor) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrolldor;
    }
    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años de edad`;
    }
}
exports.Persona = Persona;
//No debo implementar una clase en el mismo archivo donde la estoy desplegando
// let persona = new Persona("Alonso", 25, true);
// console.log(persona.saludar())
