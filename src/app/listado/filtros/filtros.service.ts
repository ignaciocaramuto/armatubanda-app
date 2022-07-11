import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  constructor(private http: HttpClient) { }

  getTiposUsuarios(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:5001/api/tipos');
  }

  getGeneros(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:5001/api/generos');
  }

  getInstrumentos(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:5001/api/instrumentos');
  }
}
