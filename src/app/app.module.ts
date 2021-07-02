import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'ngx-bootstrap/accordion';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {MenuComponent} from './menu/menu.component';
import {UsuariosService} from "./service/usuarios.service";
import {UsuariosComponent} from './usuarios/usuarios.component';
import {MercanciasComponent} from './mercancias/mercancias.component';
import {CargosComponent} from './cargos/cargos.component';
import {CargosService} from "./service/cargos.service";
import {MercanciasService} from "./service/mercancias.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { IngresoComponent } from './ingreso/ingreso.component';
import {IngresoService} from "./service/ingreso.service";
import { SalidaComponent } from './salida/salida.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        UsuariosComponent,
        MercanciasComponent,
        CargosComponent,
        IngresoComponent,
        SalidaComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AccordionModule.forRoot(),
        BsDropdownModule.forRoot(),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        UsuariosService,
        CargosService,
        MercanciasService,
        IngresoService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
