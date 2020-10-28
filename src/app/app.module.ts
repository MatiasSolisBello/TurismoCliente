import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { ListDepartComponent } from './components/list-depart/list-depart.component';
import { ListReservaComponent } from './components/list-reserva/list-reserva.component';
import { VerDepartComponent } from './components/ver-depart/ver-depart.component';
import { VerReservaComponent } from './components/ver-reserva/ver-reserva.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    LoginComponent,
    ListDepartComponent,
    ListReservaComponent,
    VerDepartComponent,
    VerReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
