import {Usuarios} from "./Usuario";

export interface Mercancia {
    id: number | string;
    nombre: string;
    usuario: Usuarios;
    cantidad: number;
    fechaRegistro: Date | string;
}
