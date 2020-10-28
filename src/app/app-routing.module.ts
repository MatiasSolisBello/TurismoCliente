import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDepartComponent } from './components/list-depart/list-depart.component';
import { ListReservaComponent } from './components/list-reserva/list-reserva.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { VerDepartComponent } from './components/ver-depart/ver-depart.component';
import { VerReservaComponent } from './components/ver-reserva/ver-reserva.component';

const routes: Routes = [
  //{path: 'agregar-reserva', component: AgregarEditarReservaComponent},
  //{path: 'editar-reserva/:id_reserva', component: AgregarEditarReservaComponent},

  {path: 'ver-depart/:id_depart', component: VerDepartComponent},
  {path: 'ver-reserva/:id_reserva', component: VerReservaComponent},


  {path: 'listadepart', component: ListDepartComponent},
  {path: 'listareserva', component: ListReservaComponent},

  {path: 'principal', component: PrincipalComponent},
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
