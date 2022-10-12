import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEducacion } from '../interfaces/educacionInterface';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  // private url: string = "http://localhost:8070/api/educacion"
  private url: string = "https://carabetta.herokuapp.com/api/educacion"

  constructor(private http: HttpClient) { }
  
  getEducacion(): Observable<IEducacion[]>{
    return this.http.get<IEducacion[]>(this.url)
  }
}