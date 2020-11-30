import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../models/Servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  myAppUrl = 'http://localhost:8090';
	myApiUrl = '/servicio/';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getListServicio(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>
    (this.myAppUrl + this.myApiUrl);
  }
}
