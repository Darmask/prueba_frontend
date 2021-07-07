import {Injectable} from '@angular/core';
import {url as urlPrincipal} from "../config/url";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Mercancia} from "../models/Mercancias";

@Injectable({
    providedIn: 'root'
})
export class MercanciasService {
    urlMercancias = `${urlPrincipal}/mercancia`

    constructor(private http: HttpClient) {
    }

    public listarMercancias(): Observable<Mercancia[]> {
        return this.http.get<Mercancia[]>(this.urlMercancias);
    }

    public guardarMercancia(mercancia: Mercancia): Observable<Mercancia> {
        return this.http.post<Mercancia>(this.urlMercancias, mercancia);
    }

    public eliminarMercancia(id: string | number, idUsuario: string | number): Observable<any> {
        console.log('mercancia: ', id, idUsuario)
       return  this.http.delete(`${this.urlMercancias}/${id}/${idUsuario}`);

    }
}
