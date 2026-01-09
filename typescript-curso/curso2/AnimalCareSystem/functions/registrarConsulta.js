"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mascotas = [];
const registrarMascota = (nuevaMascota) => {
    mascotas.push(nuevaMascota);
    return `Mascota: ${nuevaMascota.nombre} registrada con éxito (ID: ${nuevaMascota.id})`;
};
const miPrimerMascota = {
    id: 1,
    nombre: "Bigotes",
    especie: "gato",
    edad: 2,
    propietario: "Humberto Alonso"
};
console.log(`Lista de pacientes: `, mascotas);
console.log(registrarMascota(miPrimerMascota));
