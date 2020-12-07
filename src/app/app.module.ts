import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/include/navbar/navbar.component';
import { LoginComponent } from './components/include/login/login.component';
import { PrincipalComponent } from './components/include/principal/principal.component';
import { ListaDepartComponent } from './components/lista-depart/lista-depart.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { ContratarDepartComponent } from './components/contratar-depart/contratar-depart.component';
import { ContratarServicioComponent } from './components/contratar-servicio/contratar-servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PrincipalComponent,
    ListaDepartComponent,
    ListarReservaComponent,
    ContratarDepartComponent,
    ContratarServicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
