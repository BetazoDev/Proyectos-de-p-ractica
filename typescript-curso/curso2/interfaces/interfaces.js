"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let persona = {
    nombre: "Humberto",
    edad: 25,
    esDesarrollador: true,
    cumpleAnios: () => {
        persona.edad++;
    }
};
console.log(`Persona: `, persona);
console.log(persona.edad);
let sumar = (a, b) => {
    return a + b;
};
console.log(`El resultado de la suma es: ${sumar(4, 5)}`);
let vehiculos = [
    { marca: "Honda", modelo: "Civic" },
    { marca: "Wolkswagen", modelo: "Jetta", año: 2008 },
];
console.log(vehiculos);
let sumaCalculadora = (n1, n2) => {
    return n1 + n2;
};
console.log(sumaCalculadora(10, 1020));
let divisionCalculadora = (n1, n2) => {
    return n1 / n2;
};
console.log(divisionCalculadora(1200, 128));
let posts = [
    { id: 1, autor: "Mark Zuckenerg", comentarios: ["Buen post", "Sigue así, eres grande"] },
    { id: 2, autor: "Donald Trump", comentarios: ["Sigue siendo un buen presidente", "Sal de la presidencia, ya no te queremos"] }
];
console.log(posts);
// Pregunta de Reflexión:
// ¿Qué crees que pasaría si en tu arreglo de personas, intentas agregar un objeto que le falte la propiedad esDesarrollador? ¿Cómo reaccionaría el editor de código?
// Me marcaría un error de que me está faltando algo, ya que está definido dentro de mi interface pero no es opcional 
