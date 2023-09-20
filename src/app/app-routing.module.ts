import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { RecordarClaveComponent } from './recordar-clave/recordar-clave.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:"iniciar_sesion",component:InicioComponent},
  {path:"registrarse",component:RegistroComponent},
  {path:"reservaciones",component:ReservacionesComponent},
  {path:"menu_inicio",component:MenuInicioComponent},
  {path:"recordar_clave",component:RecordarClaveComponent},
  {path:"inicio",component:MenuComponent},
  {path:"",pathMatch:"full",redirectTo:"/inicio"},
  {path:"**",pathMatch:"full",redirectTo:"/inicio"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
