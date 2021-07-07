import {Injectable} from '@angular/core';
import {url as urlPrincipal} from "../config/url";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Mercancia} from "../models/Mercancias";
import {Usuarios} from "../models/Usuario";
import {Cargos} from "../models/Cargos";

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {
    urlUsuarios = `${urlPrincipal}/usuario`

    constructor(private http: HttpClient) {
    }

    public listarUsuarios(): Observable<Usuarios[]> {
        return this.http.get<Usuarios[]>(this.urlUsuarios);
    }

    public guardarUsuario(usuario: Usuarios): Observable<Usuarios> {
        return this.http.post<Usuarios>(this.urlUsuarios, usuario);
    }

    public eliminarUsuario(idUsuario: number | string| undefined): Observable<any> {
        return this.http.delete(`${this.urlUsuarios}/${idUsuario}`);
    }
}
