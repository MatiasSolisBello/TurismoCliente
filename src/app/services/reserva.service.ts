import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  myAppUrl = 'http://localhost:8090/';
	myApiUrl = 'reserva';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getListReserva(): Observable<Reserva[]>{
    return this.http.get<Reserva[]>
    (this.myAppUrl + this.myApiUrl + '/listar');
  }

  deleteReserva(id_reserva: number):Observable<Reserva>{
    return this.http.delete<Reserva>
    (this.myAppUrl + this.myApiUrl + '/eliminar/'+ id_reserva);
  }

  createReserva(res : Reserva): Observable<Reserva>{
    return this.http.post<Reserva>
    (this.myAppUrl + this.myApiUrl + '/guardar' , res, this.httpOptions);
  }

  verReserva(id_reserva: number): Observable<Reserva>{
    return this.http.get<Reserva>
    (this.myAppUrl + this.myApiUrl + '/listar/' + id_reserva);
  }

  updateReserva(res: Reserva): Observable<Reserva>{
    return this.http.put<Reserva>
    (this.myAppUrl + this.myApiUrl + '/actualizar', res, this.httpOptions);
  }
}