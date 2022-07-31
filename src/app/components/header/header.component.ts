import { Component, OnInit } from '@angular/core';
import { PostulanteService } from 'src/app/services/postulante.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   
  public postulanteActual = { nombre: "", apellido: ""};  
  linkedin:string = "https://www.linkedin.com/in/cesar-carabetta/"
  github:string = "https://github.com/CesarC87"
  mail:string = "mailto:carabetta87@gmail.com"

  constructor(private postulanteService: PostulanteService) { }

  ngOnInit(): void {
    this.postulanteService.getPostulante()
    .subscribe(data => {
      data.filter(post => {
        post.nombre === 'César' ? this.postulanteActual.nombre = post.nombre : this.postulanteActual.nombre = data[0].nombre
        post.apellido === 'Carabetta' ? this.postulanteActual.apellido = post.apellido : this.postulanteActual.apellido = data[0].apellido
      } )        
      console.log('Postulantes', this.postulanteActual)      
    })
  }

}
