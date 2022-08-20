import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email:string = "";
  public password:string = "";

  constructor(private authService: AuthService) { }

  handleSubmit(e:any){
    e.preventDefault()
    console.log(e)
  }
  handleEmailChange(e:any){
    this.email = e
    console.log(this.email)
  }
  handlePassChange(e:any){
    this.password = e
    console.log(this.password)
  }

  Login(){
    this.authService.login(this.email, this.password)
  }
  ngOnInit(): void {
  }


}
