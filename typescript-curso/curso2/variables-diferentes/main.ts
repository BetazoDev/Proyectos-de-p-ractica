//Otro tipo de variables 

//A esta variable podemos agregarle cualquier valor
let variableAny: any;

variableAny = "Soy un string"
variableAny = 1234;
variableAny = true
variableAny = undefined;

console.log(`Valor de variableAny: ${variableAny}` )

let variableDesconocida: unknown;
//variableDesconocida = "Soy un string";
variableDesconocida = 1234;
//variableDesconocida = true
//variableDesconocida = undefined;
//console.log(`Valor de variableAny: ${variableDesconocida}` )


(typeof variableDesconocida === "string" ) ? console.log(`VariableDesconocida es un string`) : console.log(`VariableDesconocida no es un string`)

//tipo de dato never 


// function throwError(message: string) : never {
//     throw new Error (message)
// } 
// throwError("Este es un error")

function logMessage(message: string): void {
    console.log(`log Message`, message)
}  

logMessage("Este es un mensaje de Log")




//Ejercicios de práctica
// 1.- El Validador de Tipos: Crea una variable de tipo unknown llamada entradaUsuario. Asígnale un número. Luego, intenta asignarle el valor de entradaUsuario a una variable de tipo number llamada edadConfirmada.
// Pista: TypeScript no te dejará hacerlo directamente. Tendrás que usar un if (typeof ... === ...) para lograrlo.

let entradaUsuario: unknown;
entradaUsuario = 23;
let edadConfirmada: number;


if(typeof entradaUsuario === "number") {
    edadConfirmada = entradaUsuario;
} else 
     edadConfirmada = 100;

console.log(edadConfirmada)


//2. La Función Silenciosa: Crea una función llamada procesarPago que reciba un monto (number). La función debe imprimir en consola "Procesando $" + monto, pero no debe retornar nada. Asegúrate de tipar el retorno correctamente.

function procesarPago(monto: number): void {
    console.log(`Procesando $ ${monto}`)
}
procesarPago(50);


//3.- Análisis de Seguridad: Tienes el siguiente código:

let dato: unknown = "10";
// let total = dato.toFixed(2); 

//¿Qué pasará al ejecutarlo? Ahora, intenta hacer lo mismo cambiando any por unknown. ¿Qué hace TypeScript para protegerte?
//Me manda un mensaje recordándome que la variable "dato" es de tipo unknown para que no cometa error

//4.- El Sistema a Prueba de Fallos: Escribe una función llamada detenerSistema que reciba un mensaje de error y que, al ejecutarse, lance una excepción (throw new Error). Define el tipo de retorno como never.

// function detenerSistema(message: string): never {
//     throw new Error (message)
// } detenerSistema("Se detuvo el sistema")



//Ejercicios avanzados 

//1.- El Conversor Seguro: Escribe una función llamada convertirACentimetros. Debe recibir un parámetro de tipo unknown.

//Si el parámetro es un number, debe retornar el número multiplicado por 100.
//Si no es un número, debe imprimir un mensaje de error con console.error y no retornar nada.
//Pista: Piensa qué tipo de retorno debe tener la función si en un caso regresa un número y en otro no regresa nada.


function convertirACentimetros(num: unknown ): number | void {
    if (typeof num === "number") {
        return num * 100;
    } else {
        console.error("Error, el valor no es un número")
    }
} 
//Regresa un number
//convertirACentimetros(200)

//Regresa un string
//convertirACentimetros("200")

//2.- El Logger de Emergencia: Crea una función que reciba un nivelDeError (string).
// Si el nivel es "CRITICO", debe llamar a una función que retorne never (lanzando un error).
// Si no, simplemente debe imprimir "Error moderado" (retorno void).

//Puede funcionar pero no es la mejor manera
// function tipoDeError (nivelDeError: string) {
//     if(nivelDeError === "CRITICO"){
//         function errorMessage (message: string): never {
//             throw new Error (message)
//         } errorMessage("CRITICO")
//     } else {
//         function errorMessage(message: string):void{
//             console.log("Error Moderado");
//         } errorMessage("")
//     }
// } tipoDeError("Moderado")


//Es mejor crear las funciones fuera de la función principal 
// 1. Definimos las herramientas (funciones de utilidad) fuera
function lanzarErrorFatal(msg: string): never {
    throw new Error(`[FATAL]: ${msg}`);
}
function logModerado(msg: string): void {
    console.log(`[AVISO]: ${msg}`);
}

// 2. La lógica de decisión es mucho más limpia
function procesarEstadoError(nivel: string): void {
    if (nivel === "CRITICO") {
        lanzarErrorFatal("Sistema caído"); // Aquí termina la ejecución
    } else {
        logModerado("Error leve detectado");
    }
}
procesarEstadoError("CRITICO");


//3.- Refactorización Senior: Mira este código de un programador que no sabe TypeScript:

// function duplicar(valor: any) {
//   return valor * 2;
// }

//Reescríbelo usando unknown y añade la validación necesaria para que sea seguro.

function duplicar(valor: unknown) {
    if (typeof valor === "number"){
        return valor *2;
    }
}


