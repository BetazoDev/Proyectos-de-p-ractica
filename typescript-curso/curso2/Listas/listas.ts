let nombres: string[] = ["Humberto", "Alonso", "Itzel", "Guadalupe"];
console.log("Nombres: ", nombres)

let edades: number[] = [25,30,35,20];
console.log("Edades: ", edades);

let mixto: (string | number | boolean)[]   = ["Humberto", 25, true];
console.log("Mixto: ", mixto)

//Ya no permite usar boolean


interface Persona {
    nombre: string,
    edad: number,
    esDesarrollador: boolean;
}

let personas: Persona[] = [
    {nombre: "Humberto", edad: 25, esDesarrollador: true},
    {nombre: "Itzel", edad: 25, esDesarrollador: false},
    {nombre: "Joselitos", edad: 25, esDesarrollador: false},
];

personas.push({nombre: "Wero", edad: 25, esDesarrollador: true});

console.log(personas)

//Tupla
let persona: [string, number, boolean];
persona = ["Humberto", 25, true];
console.log("Persona", persona)


let personasTupla: [string, number, boolean][] = [];
personasTupla.push(["Humberto",25, true]);
personasTupla.push(["Itzel",25, false]);
personasTupla.push(["Joselitos",25, false]);
personasTupla.push(["Wero",25, true]);

personasTupla.forEach(persona => {
    console.log("Persona: ", persona);
    let nombre: string = persona[0];
    let edad: number = persona[1];
    let esDesarrollador: boolean = persona[2];


    console.log("Nombre ", nombre);
    console.log("edad ", edad);
    console.log("Es desarrollador ", esDesarrollador);
})
console.log(personasTupla);


//enumeradores 

enum DiasDeLaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}


let dia: DiasDeLaSemana = DiasDeLaSemana.Lunes;

console.log(`El día es: ${dia}`)
console.log(`El día es: ${DiasDeLaSemana[dia]}`)



//Ejercicios de refuerzo 

// El Carrito de Compras:
// Crea una interface llamada Producto con nombre (string) y precio (number).
// Crea un array de tipo Producto[] con al menos 3 objetos.
// Usa un ciclo (forEach o for...of) para calcular el precio total de todos los productos y mostrarlo en consola.

interface Producto {
    nombre: string,
    precio: number,
}

let productos: Producto[] = [
    {nombre: "PlayStation 5", precio: 7999},
    {nombre: "Nintendo Switch 2", precio: 12999},
]

let total: number = 0;
productos.forEach((producto) => {
    total = total + producto.precio;
})
console.log(total);


// Tuplas de Configuración:
// Imagina que manejas colores en formato RGB. Crea una tupla llamada ColorRGB que acepte exactamente tres números.
// Crea una variable con el color blanco [255, 255, 255].
// Intenta agregar un cuarto número y observa cómo TypeScript te protege.

let ColorRGB: [number, number, number][] = [];
//ColorRGB.push([255,255,255,255])
//Solo permite 3 elementos, yo le estoy pasando 4


// Enums Personalizados:
// Crea un enum llamado EstadoPedido.
// En lugar de usar los valores por defecto (0, 1, 2...), asígnale valores de tipo string: PENDIENTE = "Pendiente", ENVIADO = "Enviado", ENTREGADO = "Entregado".
// Crea una función que reciba este enum y devuelva un mensaje personalizado según el estado.


enum EstadoPedido {
    PENDIENTE = "Pendiente",
    ENVIADO = "Enviado",
    ENTREGADO = "Entregado",
}


function consultaDePedido(status: EstadoPedido){
    if(status === EstadoPedido.PENDIENTE){
        console.log("El artículo está pendiente de envio");
    } else if (status === EstadoPedido.ENVIADO){
        console.log("El artículo ha sido enviado");
    } else if (status === EstadoPedido.ENTREGADO){
        console.log("El artículo ha sido entregado exitosamente");
    } else if (status !== EstadoPedido.ENTREGADO && status !== EstadoPedido.ENVIADO && status !== EstadoPedido.PENDIENTE) {
        console.log("Estado desconocido")
    }
} consultaDePedido(EstadoPedido.ENTREGADO);


