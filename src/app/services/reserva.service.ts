import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/Reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  myAppUrl = 'http://localhost:8090';
	myApiUrl = '/reserva/';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getListReserva(): Observable<Reserva[]>{
    return this.http.get<Reserva[]>
    (this.myAppUrl + this.myApiUrl);
  }

  createReserva(id: number, reserva : Reserva): Observable<Reserva>{
    return this.http.post<Reserva>
    (this.myAppUrl + '/servicio/' + reserva.servicio_id +
    '/depart/' + reserva.departamento_id+ '/user/' + 
    reserva.usuario_id + '/reserva/', reserva, this.httpOptions );
  }

  verReserva(id: number): Observable<Reserva>{
    return this.http.get<Reserva>
    (this.myAppUrl + this.myApiUrl+ id);
  }

  updateReserva(reserva: Reserva):Observable<Reserva>{
    return this.http.put<Reserva>
    (this.myAppUrl + this.myApiUrl, reserva, this.httpOptions);
  }

  deleteReserva(id: number):Observable<Reserva>{
    return this.http.delete<Reserva>
    (this.myAppUrl + this.myApiUrl + id);
  }
}
