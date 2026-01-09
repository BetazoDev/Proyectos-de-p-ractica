"use strict";
//Interface propiedad opcional 
Object.defineProperty(exports, "__esModule", { value: true });
let direccion = {
    calle: "Calle nueva",
    numero: 620,
};
console.log(direccion);
let direccion2 = {
    calle: "Calle 2 con ciudad",
    numero: 620,
    ciudad: "Oaxaca"
};
console.log(direccion2);
let personaRead = {
    nombre: "Humberto",
    edad: 25,
    esDesarrollador: true
};
let empleadoRead = {
    nombre: "Humberto",
    edad: 25,
    esDesarrollador: true,
    puesto: "Desarrollador web Jr."
};
console.log(empleadoRead);
let configuracion = {
    idServidor: "Server-15",
    puerto: 256,
    seguridad: true
};
//No permite al ser Read Only property
//configuracion.idServidor = "Server-28";
console.log(configuracion);
let smartWatch = {
    hora: "12:30",
    fecha: "01/08/2026",
    pasos: 1665
};
console.log(smartWatch);
// Pregunta de Examen:
// Si tengo una interfaz con una propiedad readonly, ¿significa que el valor está protegido una vez que el código se convierte a JavaScript y se ejecuta en el navegador?
// TypeScript no permite que se haga este cambio, En JavaScript es posible, pero sí tiene un candado que no pasa el código a JS si TS detecta un error
