import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExperiencia } from '../interfaces/experienciaInterface';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private url: string = "http://localhost:8070/api/experiencia"

  constructor(private http: HttpClient) { }
  
  getExperiencia(): Observable<IExperiencia[]>{
    return this.http.get<IExperiencia[]>(this.url)
  }
}
