"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nombres = ["Humberto", "Alonso", "Itzel", "Guadalupe"];
console.log("Nombres: ", nombres);
let edades = [25, 30, 35, 20];
console.log("Edades: ", edades);
let mixto = ["Humberto", 25, true];
console.log("Mixto: ", mixto);
let personas = [
    { nombre: "Humberto", edad: 25, esDesarrollador: true },
    { nombre: "Itzel", edad: 25, esDesarrollador: false },
    { nombre: "Joselitos", edad: 25, esDesarrollador: false },
];
personas.push({ nombre: "Wero", edad: 25, esDesarrollador: true });
console.log(personas);
//Tupla
let persona;
persona = ["Humberto", 25, true];
console.log("Persona", persona);
let personasTupla = [];
personasTupla.push(["Humberto", 25, true]);
personasTupla.push(["Itzel", 25, false]);
personasTupla.push(["Joselitos", 25, false]);
personasTupla.push(["Wero", 25, true]);
personasTupla.forEach(persona => {
    console.log("Persona: ", persona);
    let nombre = persona[0];
    let edad = persona[1];
    let esDesarrollador = persona[2];
    console.log("Nombre ", nombre);
    console.log("edad ", edad);
    console.log("Es desarrollador ", esDesarrollador);
});
console.log(personasTupla);
//enumeradores 
var DiasDeLaSemana;
(function (DiasDeLaSemana) {
    DiasDeLaSemana[DiasDeLaSemana["Lunes"] = 0] = "Lunes";
    DiasDeLaSemana[DiasDeLaSemana["Martes"] = 1] = "Martes";
    DiasDeLaSemana[DiasDeLaSemana["Miercoles"] = 2] = "Miercoles";
    DiasDeLaSemana[DiasDeLaSemana["Jueves"] = 3] = "Jueves";
    DiasDeLaSemana[DiasDeLaSemana["Viernes"] = 4] = "Viernes";
    DiasDeLaSemana[DiasDeLaSemana["Sabado"] = 5] = "Sabado";
    DiasDeLaSemana[DiasDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiasDeLaSemana || (DiasDeLaSemana = {}));
let dia = DiasDeLaSemana.Lunes;
console.log(`El día es: ${dia}`);
console.log(`El día es: ${DiasDeLaSemana[dia]}`);
let productos = [
    { nombre: "PlayStation 5", precio: 7999 },
    { nombre: "Nintendo Switch 2", precio: 12999 },
];
let total = 0;
productos.forEach((producto) => {
    total = total + producto.precio;
});
console.log(total);
// Tuplas de Configuración:
// Imagina que manejas colores en formato RGB. Crea una tupla llamada ColorRGB que acepte exactamente tres números.
// Crea una variable con el color blanco [255, 255, 255].
// Intenta agregar un cuarto número y observa cómo TypeScript te protege.
let ColorRGB = [];
//ColorRGB.push([255,255,255,255])
//Solo permite 3 elementos, yo le estoy pasando 4
// Enums Personalizados:
// Crea un enum llamado EstadoPedido.
// En lugar de usar los valores por defecto (0, 1, 2...), asígnale valores de tipo string: PENDIENTE = "Pendiente", ENVIADO = "Enviado", ENTREGADO = "Entregado".
// Crea una función que reciba este enum y devuelva un mensaje personalizado según el estado.
var EstadoPedido;
(function (EstadoPedido) {
    EstadoPedido["PENDIENTE"] = "Pendiente";
    EstadoPedido["ENVIADO"] = "Enviado";
    EstadoPedido["ENTREGADO"] = "Entregado";
})(EstadoPedido || (EstadoPedido = {}));
function consultaDePedido(status) {
    if (status === EstadoPedido.PENDIENTE) {
        console.log("El artículo está pendiente de envio");
    }
    else if (status === EstadoPedido.ENVIADO) {
        console.log("El artículo ha sido enviado");
    }
    else if (status === EstadoPedido.ENTREGADO) {
        console.log("El artículo ha sido entregado exitosamente");
    }
    else if (status !== EstadoPedido.ENTREGADO && status !== EstadoPedido.ENVIADO && status !== EstadoPedido.PENDIENTE) {
        console.log("Estado desconocido");
    }
}
consultaDePedido(EstadoPedido.ENTREGADO);
