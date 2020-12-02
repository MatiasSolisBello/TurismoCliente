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

  deleteReserva(id: number):Observable<Reserva>{
    return this.http.delete<Reserva>
    (this.myAppUrl + this.myApiUrl + id);
  }
}
