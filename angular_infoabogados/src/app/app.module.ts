import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { RecordarClaveComponent } from './recordar-clave/recordar-clave.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    RecordarClaveComponent,
    ReservacionesComponent,
    InicioComponent,
    MenuComponent,
    MenuInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
