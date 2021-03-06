import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depart } from '../models/Depart';

@Injectable({
  providedIn: 'root'
})
export class DepartService {
  myAppUrl = 'http://localhost:8090';
	myApiUrl = '/depart/';
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getListDepart(): Observable<Depart[]>{
    return this.http.get<Depart[]>
    (this.myAppUrl + this.myApiUrl);
  }
}
