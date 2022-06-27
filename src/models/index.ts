export type Modelo1 = {
    nombre: string;
    edad: number;
    coche: string;
}

export interface ModeloInterface1 {
    nombre: string
    coche: {
        nombre: string
        fecha:  {}
    }
}