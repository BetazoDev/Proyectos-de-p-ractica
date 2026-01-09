//Variables base

let nombre: string = "Alonso"
const edad: number = 25;
let description: string = "Soy desarrollador web Jr. Estoy aprendiendo TypeScript"

let esDesarrollador: boolean = true;
let mes: string | undefined;
let VarNull: null = null;

mes = "Junio"

console.log(`Mi nombre es ${nombre}, tengo ${edad} y ${description}, me identifico cómo desarrollador? ${esDesarrollador} y nací en el mes de ${mes}`)



//Ejercicios reforzamiento

// 1.- El Sistema de Inventario: Crea una variable stock que pueda ser un número o el string "Sin existencias". Asignale un valor inicial y luego cámbialo al otro tipo. 
let stock: number | string;

stock = 1234;
stock = "Sin existencias"


//2.- Constantes Estrictas: Intenta cambiar el valor de tu constante edad en el código. Observa el error que te da TypeScript y explícame con tus palabras por qué sucede.

//edad = 22;
//Esto sucede porque la variable de tipo "const" es una variable que no puede ser modificado su contenido, para cambiar contenido usamos let 


//3. Tipo "Any" (El villano): Investiga el tipo any. Crea una variable de este tipo, asígnale un número y luego un string. 

let variableAny: any;

variableAny = 1234;
variableAny = "Hola Mundo"
variableAny = true

//Pregunta: ¿Por qué crees que los desarrolladores senior evitamos usar any a toda costa?
//Evitamos el uso de Any porque debemos de ser lo más estrictos posibles al crear código, si sabemos que nuestra variable será de un tipo y no se cambiará el valor, inferimos con el valor correcto


//4.- Arreglos Básicos (Bonus): Basándote en lo que sabes, ¿cómo crees que se declararía un arreglo que solo acepte strings? Intenta crear uno llamado habilidades.
let habilidades: string[];






