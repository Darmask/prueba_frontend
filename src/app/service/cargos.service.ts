import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cargos} from "../models/Cargos";
import {url as urlPrincipal} from "../config/url";

@Injectable({
    providedIn: 'root'
})
export class CargosService {
    urlCargos = `${urlPrincipal}/cargos`;

    constructor(private http: HttpClient) {
    }

    public listarCargos(): Observable<Cargos[]> {
        return this.http.get<Cargos[]>(this.urlCargos);
    }

    public guardarCargo(cargo: Cargos): Observable<Cargos> {
        return this.http.post<Cargos>(this.urlCargos, cargo);
    }

    public eliminarCargo(idCargo: number | string): Observable<any> {
        return this.http.delete(`${this.urlCargos}/${idCargo}`);
    }
}
