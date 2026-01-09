import { Mascota } from '../interfaces/interfaces';


let mascotas: Mascota[] = []

const registrarMascota = (nuevaMascota: Mascota): string => {
    mascotas.push(nuevaMascota);
    return `Mascota: ${nuevaMascota.nombre} registrada con éxito (ID: ${nuevaMascota.id})`
} 


const miPrimerMascota: Mascota = {
    id: 1,
    nombre: "Bigotes",
    especie: "gato",
    edad: 2,
    propietario: "Humberto Alonso"
}


console.log(`Lista de pacientes: `, mascotas)
console.log(registrarMascota(miPrimerMascota))
