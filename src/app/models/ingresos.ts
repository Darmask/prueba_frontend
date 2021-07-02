export interface Ingresos {
    cantidad: number | string;
    fechaIngreso: Date | string;
    mercancia: {
        id: number | string;
        nombre?: string;
        cantidad?: number | string;
        fechaRegistro?: Date;
    };
}
