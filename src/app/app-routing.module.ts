import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContratarDepartComponent } from './components/contratar-depart/contratar-depart.component';
import { ContratarServicioComponent } from './components/contratar-servicio/contratar-servicio.component';
import { LoginComponent } from './components/include/login/login.component';
import { PrincipalComponent } from './components/include/principal/principal.component';
import { ListaDepartComponent } from './components/lista-depart/lista-depart.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';


const routes: Routes = [
  {path: 'listadepart', component: ListaDepartComponent},
  {path: 'listareserva', component: ListarReservaComponent},

  {path: 'contratar-depart', component: ContratarDepartComponent},
  {path: 'contratar-servicio/:id', component: ContratarServicioComponent},


  {path: 'principal', component: PrincipalComponent},
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
