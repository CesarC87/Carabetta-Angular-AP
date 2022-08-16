import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostulante } from '../interfaces/postulanteInterface';

@Injectable({
  providedIn: 'root'
})
export class PostulanteService {

  private url: string = "http://localhost:8070/api/user"
  // private url: string = "https://spring-tpfinal-argprog.herokuapp.com/api"

  constructor(private http: HttpClient) { }

  getPostulante(): Observable<IPostulante[]>{
    return this.http.get<IPostulante[]>(this.url)
  }
}
