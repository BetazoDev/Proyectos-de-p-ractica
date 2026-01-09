//Interface propiedad opcional 

interface Direccion {
    calle: string,
    numero: number,
    ciudad?: string
}

let direccion: Direccion = {
    calle: "Calle nueva",
    numero: 620,
}

console.log(direccion)

let direccion2: Direccion = {
    calle: "Calle 2 con ciudad",
    numero: 620,
    ciudad: "Oaxaca"
}
console.log(direccion2)



//Solo lectura

interface Persona {
    readonly nombre: string,
    readonly edad: number,
    readonly esDesarrollador: boolean,
}


let personaRead: Persona =  {
    nombre: "Humberto",
    edad: 25,
    esDesarrollador: true
}
//No permite cambiar porque la propiedad es solo lectura
//personaRead.nombre = "Alonso";


//Extended interface
interface Empleado extends Persona {
    readonly puesto: string
}


let empleadoRead: Empleado = {
    nombre: "Humberto",
    edad: 25,
    esDesarrollador: true,
    puesto: "Desarrollador web Jr."
}

console.log(empleadoRead)



//Ejercicios de reforzamiento
// La Interfaz de Configuración:
// Crea una interfaz Configuracion donde el idServidor sea readonly (string).
// Añade puerto (number) y un campo opcional seguridad (boolean).
// Crea el objeto e intenta cambiar el idServidor para ver cómo falla.


interface Configuracion { 
    readonly idServidor: string,
    puerto: number,
    seguridad?: boolean
}

let configuracion: Configuracion = {
    idServidor: "Server-15",
    puerto: 256,
    seguridad: true
}

//No permite al ser Read Only property
//configuracion.idServidor = "Server-28";

console.log(configuracion)



// Herencia Múltiple:
// Crea una interfaz Reloj con la propiedad hora: string.
// Crea otra interfaz Calendario con la propiedad fecha: string.
// Crea una interfaz SmartWatch que extienda a ambas (extends Reloj, Calendario) y añade una propiedad pasos: number.
// Crea un objeto de tipo SmartWatch con todos los datos.


interface Reloj {
    hora: string,
}

interface Calendario {
    fecha: string,
}

interface SmartWatch extends Reloj, Calendario{
    pasos: number,
}

let smartWatch: SmartWatch = {
    hora: "12:30",
    fecha: "01/08/2026",
    pasos: 1665
}


console.log(smartWatch)


// Pregunta de Examen:
// Si tengo una interfaz con una propiedad readonly, ¿significa que el valor está protegido una vez que el código se convierte a JavaScript y se ejecuta en el navegador?
// TypeScript no permite que se haga este cambio, En JavaScript es posible, pero sí tiene un candado que no pasa el código a JS si TS detecta un error



