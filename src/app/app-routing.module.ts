import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/include/login/login.component';
import { PrincipalComponent } from './components/include/principal/principal.component';
import { ListaDepartComponent } from './components/lista-depart/lista-depart.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { ListarServicioComponent } from './components/listar-servicio/listar-servicio.component';


const routes: Routes = [
  {path: 'listadepart', component: ListaDepartComponent},
  {path: 'listareserva', component: ListarReservaComponent},
  {path: 'listaservicio', component: ListarServicioComponent},


  {path: 'principal', component: PrincipalComponent},
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
