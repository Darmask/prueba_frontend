import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {url as urlPrincipal} from "../config/url";
import {HttpClient} from "@angular/common/http";
import {Ingresos} from "../models/ingresos";

@Injectable({
    providedIn: 'root'
})
export class IngresoService {
    urlIngreso = `${urlPrincipal}`;

    constructor(private http: HttpClient) {
    }

    public listarIngreso(): Observable<Ingresos[]> {
        return this.http.get<Ingresos[]>(`${this.urlIngreso}/ingreso`);
    }

    public listarSalida(): Observable<Ingresos[]> {
        return this.http.get<Ingresos[]>(`${this.urlIngreso}/salida`);
    }

    public guardarIngreso(ingreso: Ingresos): Observable<Ingresos> {
        return this.http.post<Ingresos>(`${this.urlIngreso}/ingreso`, ingreso);
    }
    public guardarSalida(salida: Ingresos): Observable<Ingresos> {
        return this.http.post<Ingresos>(`${this.urlIngreso}/salida`, salida);
    }
}
