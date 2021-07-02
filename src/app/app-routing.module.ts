import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsuariosComponent} from "./usuarios/usuarios.component";
import {MercanciasComponent} from "./mercancias/mercancias.component";
import {CargosComponent} from "./cargos/cargos.component";
import {IngresoComponent} from "./ingreso/ingreso.component";
import {SalidaComponent} from "./salida/salida.component";

const routes: Routes = [
    {
        path: '', component: MercanciasComponent
    },
    {
        path:'usuarios',component:UsuariosComponent
    },
    {
        path:'cargo',component:CargosComponent
    },
    {
        path:'ingreso',component:IngresoComponent
    },
    {
        path:'salida',component:SalidaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
