import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:8070/api';

  token:any; 

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string , password: string){
    this.http.post(this.apiUrl + '/authenticate', {email: email, password: password})
    .subscribe((resp:any) => {
      //Redireccionamos a la home
      this.router.navigate(['']);
      localStorage.setItem('token', resp.token)
    })
  }
  logOut(){
    localStorage.removeItem('token')
  }

  //Servicio para verificar si existe la sesion
  public get logIn(): boolean{
    return (localStorage.getItem('token') !== null)
  }
}
