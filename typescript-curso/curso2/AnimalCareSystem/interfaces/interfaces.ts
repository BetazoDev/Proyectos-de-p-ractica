export enum EstadoCita {
    PENDIENTE,
    EN_CONSULTA,
    COMPLETADO
}

export interface Mascota {
    readonly id: number,
    nombre: string,
    especie: string,
    edad: number,
    propietario?: string
}


export type historialMedico = [fecha: string, diagnostico: string, costo: number];




