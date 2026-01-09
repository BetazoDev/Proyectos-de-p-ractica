export class Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;

    constructor(nombre: string, edad: number, esDesarrolldor: boolean){
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrolldor
    }

    saludar(): string {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años de edad`;
    }
}


//No debo implementar una clase en el mismo archivo donde la estoy desplegando
// let persona = new Persona("Alonso", 25, true);
// console.log(persona.saludar())

