import {Cargos} from "./Cargos";

export interface Usuarios {
    id: number | string;
    nombre: string;
    edad: number | string;
    fechaIngreso: Date | string;
    cargo: Cargos;
}