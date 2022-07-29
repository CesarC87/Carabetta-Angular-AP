import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostulante } from '../interfaces/postulanteInterface';

@Injectable({
  providedIn: 'root'
})
export class PostulanteService {

  private url: string = "bzx7pe4e2wyleamhp4lx-mysql.services.clever-cloud.com:3306/bzx7pe4e2wyleamhp4lx?useSSL=false&serverTimezone=UTC"

  constructor(private http: HttpClient) { }

  getPostulante(): Observable<IPostulante>{
    return this.http.get<IPostulante>(this.url)
  }
}
