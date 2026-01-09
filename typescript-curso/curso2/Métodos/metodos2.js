"use strict";
//Parámetros opcionales
Object.defineProperty(exports, "__esModule", { value: true });
function saludar(nombre, saludo) {
    if (saludo) {
        return `${saludo}, ${nombre}`;
    }
    else {
        return `Hola, ${nombre}`;
    }
}
console.log(saludar("Alonso"));
console.log(saludar("Alonso", "Buen día"));
//Parámetros múltiples
function sumarTodos(...numeros) {
    return numeros.reduce((acumulado, actual) => acumulado + actual, 0);
}
console.log(`El resultado de la suma de todos nuestros números es: ${sumarTodos(1, 2, 3, 4, 5)}`);
//valores por defecto 
function despedir(nombre, despedida = "Adiós") {
    return `${despedida}, ${nombre}`;
}
console.log(despedir("Alonso"));
console.log(despedir("Alonso", "Nos vemos"));
//Ejercicios de reforzamientos
// La Calculadora Flexible:
// Crea una función llamada operar.
// Debe recibir dos números obligatorios (a y b).
// Debe recibir un tercer parámetro opcional llamado operacion (string).
// Si se envía "restar", debe retornar la resta. Si no se envía nada o se envía otra cosa, debe retornar la suma por defecto.
function operacion(a, b, operacion) {
    if (operacion === "restar") {
        return a - b;
    }
    else {
        return a + b;
    }
}
console.log(operacion(16, 12));
console.log(operacion(16, 12, "restar"));
// Lista de Invitados (Rest Parameters):
// Crea una función llamada formatearInvitados.
// Debe recibir un parámetro obligatorio evento (string).
// Debe recibir una cantidad indefinida de nombres (strings).
// Debe retornar un string que diga: "Para el evento [evento] asistirán: [nombre1, nombre2, ...]".
// Pista: Puedes usar nombres.join(", ") para convertir el array en un string bonito.
function formatearInvitados(evento, ...invitados) {
    return `Para el ${evento} asistirán ${invitados.join(", ")}`;
}
console.log(formatearInvitados("Buffet de michis", "Matt", "Blanca", "Rogelio", "Bigotes", "Zato"));
// Configurador de Perfil (Default):
// Crea una función llamada crearUsuario.
// Recibe nickname (obligatorio) y rol (con valor por defecto "usuario-estándar").
// Debe retornar un mensaje: "Usuario [nickname] creado con el rol [rol]".
function crearUsuario(nickname, rol = "usuario-estándar") {
    return `Usuario: ${nickname}, rol: ${rol}`;
}
console.log(crearUsuario("Nenuco09"));
console.log(crearUsuario("Nenuco09", "Admin"));
// Pregunta de Análisis:
// En tu función despedir(nombre: string, despedida: string = "Adiós"), ¿qué crees que pasaría si intentas declarar despedir(despedida: string = "Adiós", nombre: string) (cambiando el orden)? ¿Por qué crees que TypeScript marcaría un error?
//No permite poner primero un valor opcional, primero debe retornar un valor que sí contenga datos
