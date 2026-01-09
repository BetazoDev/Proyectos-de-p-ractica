interface persona {
    nombre: string,
    edad: number,
    esDesarrollador: boolean,
    cumpleAnios: ()=>void
}

let persona: persona = {
    nombre: "Humberto",
    edad: 25,
    esDesarrollador: true,
    cumpleAnios: ()=> {
        persona.edad ++
    }    
}
console.log(`Persona: `, persona)
console.log(persona.edad);


// let personas: persona[] =[
//     {nombre: "Humberto", edad: 25, esDesarrollador: true},
//     {nombre: "Itzel", edad: 25, esDesarrollador: false},
//     {nombre: "Joselitos", edad: 25, esDesarrollador: false},
//     {nombre: "Wero", edad: 25, esDesarrollador: true},
// ]
// console.log(`Personas: `, personas)


interface Sumar {
    (a: number, b: number): number;
}

let sumar: Sumar  =  (a: number, b: number): number => {
    return a+b;
}

console.log(`El resultado de la suma es: ${sumar(4,5)}`)



// interface Vehiculo {
//     marca: string,
//     encender: ()=> void,
// }

// let vehiculo: Vehiculo = {
//     marca: "Audi",
//     encender() {
//         console.log("auto encendido")
//     },
// }

// console.log(vehiculo.encender)

// Para dominar las interfaces y las funciones flecha, resuelve estos retos:
// La Interface Extendida (Opcional):
// Crea una interfaz llamada Vehiculo con marca (string) y modelo (string).
// Añade una propiedad opcional año (number).
// Crea un objeto que use la interfaz incluyendo el año y otro que no lo incluya.

interface Vehiculo {
    marca: string,
    modelo: string,
    año?: number
}


let vehiculos: Vehiculo[] = [
    {marca: "Honda", modelo: "Civic"},
    {marca: "Wolkswagen", modelo: "Jetta", año: 2008},
]

console.log(vehiculos)


// Interface para Métodos:
// Crea una interfaz Calculadora que defina una función. Esta función debe recibir dos números y devolver un número.
// Crea dos variables basadas en esa interfaz: una que multiplique y otra que divida.
// Pista: Usa funciones flecha para las implementaciones.

interface Calculadora {
    (n1: number, n2: number): number,
}

let sumaCalculadora: Calculadora = (n1: number, n2: number): number => {
    return n1+n2;
}

console.log(sumaCalculadora(10,1020));

let divisionCalculadora: Calculadora = (n1: number, n2: number): number => {
    return n1/n2;
}
console.log(divisionCalculadora(1200,128));


// Interface de Datos de API:
// Imagina que recibes datos de una red social. Crea una interfaz Post con: id (number), autor (string) y comentarios (un arreglo de strings).
// Crea un arreglo de Post[] con al menos 2 publicaciones de ejemplo.


interface Post {
    id: number,
    autor: string,
    comentarios: string[],
}

let posts: Post[] = [
    {id: 1, autor: "Mark Zuckenerg", comentarios: ["Buen post", "Sigue así, eres grande"]},
    {id: 2, autor: "Donald Trump", comentarios: ["Sigue siendo un buen presidente", "Sal de la presidencia, ya no te queremos"]}
]

console.log(posts);


// Pregunta de Reflexión:
// ¿Qué crees que pasaría si en tu arreglo de personas, intentas agregar un objeto que le falte la propiedad esDesarrollador? ¿Cómo reaccionaría el editor de código?
// Me marcaría un error de que me está faltando algo, ya que está definido dentro de mi interface pero no es opcional 


