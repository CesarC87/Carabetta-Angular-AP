import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProyectos } from '../interfaces/proyectosInterface';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private url: string = "http://localhost:8070/api/proyectos"

  constructor(private http: HttpClient) { }

  getProyectos(): Observable<IProyectos[]>{
    return this.http.get<IProyectos[]>(this.url)
  }
}
