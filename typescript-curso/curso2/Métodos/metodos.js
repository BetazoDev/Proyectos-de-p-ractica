"use strict";
//metodos.ts
Object.defineProperty(exports, "__esModule", { value: true });
//Una función se escribe así 
//function (comenzamos con esta palaba) nombreDeFuncion(este es el nombre que le daremos)(message: string(este es la propiedad que recibe)): void(es el valor que puede esperar la función completa){
// Entre el paréntesis va la función
//}
//nombreDeFuncion("Hola Mundo")(Mandamos a llamar la función y dentro de esta ponemos el valor que va a corresponder a "message")
function imprimeMensaje(message) {
    console.log(message);
}
imprimeMensaje("Hola mundo, esta es mi función que imprime mensaje");
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
console.log(`El resultado es ${sumar(10, 5)}`);
//Podemos obtener el resultado de diferentes maneras 
let resultado = sumar(10, 5);
console.log(`El resultado es ${resultado}`);
//Ejercicios de Refuerzo 
// El Validador de Mayores: Crea una función llamada esMayorDeEdad.
// Debe recibir un parámetro edad de tipo number.
// Debe retornar un boolean (true si es 18 o más, false si no).
// Llama a la función y guarda el resultado en una variable para imprimirla.
function esMayorDeEdad(edad) {
    //(edad >= 18)? true: false;
    if (edad >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(`Es mayor de edad? ${esMayorDeEdad(15)}`);
//Mejor respuesta 
function esMayorDeEdad2(edad) {
    return edad >= 18;
}
console.log(`Es mayor de edad? ${esMayorDeEdad(18)}`);
// Calculadora de Promedios: Crea una función llamada obtenerPromedio.
// Debe recibir tres parámetros: n1, n2 y n3 (todos números).
// Debe retornar el promedio de los tres (la suma dividida entre 3).
// Reto extra: Asegúrate de tipar el retorno de la función explícitamente como : number.
function obtenerPromedio(n1, n2, n3) {
    let sumaDeCalificaciones = n1 + n2 + n3;
    let promedio = sumaDeCalificaciones / 3;
    console.log(`Tu promedio es ${promedio}`);
}
obtenerPromedio(10, 9, 7);
function obtenerPromedio2(n1, n2, n3) {
    let promedio2 = (n1 + n2 + n3) / 3;
    return promedio2;
}
obtenerPromedio2(10, 9, 7);
console.log(`El promedio es ${obtenerPromedio2(10, 9, 7)}`);
// Saludo Personalizado: Crea una función llamada saludar.
// Debe recibir un nombre (string).
// Debe retornar un string que diga: "Hola [nombre], bienvenido al curso de TypeScript".
// Imprime el resultado en la consola.
function saludar(nombre) {
    nombre.forEach(nombres => {
        return console.log(`Hola ${nombres}, bienvenido al curso de TypeScript`);
    });
}
saludar(["Alonso", "Daniel", "Rodrigo"]);
//Mejor forma
function saludar2(nombre) {
    return `Hola ${nombre}, bienvenido al curso de TypeScript`;
}
console.log(saludar2("Alonso"));
// Análisis de Error (Pregunta): Si tienes la función sumar(a: number, b: number): number, ¿qué pasa si intentas ejecutar sumar(10, "5")? ¿Por qué TypeScript nos ayuda en este caso comparado con JavaScript puro?
//TypeScript nos ayuda para saber qué debemos de retornar con nuestra función, en JavaScript es admitido porque no inferimos en el tipo de respuesta que queremos recibir, pero en TypeScript sí para evitar mandar datos que no son correctos
