import { Component, OnInit } from '@angular/core';
import { PostulanteService } from 'src/app/services/postulante.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  title = 'Experiencia'
  public experiencia: string = "";

  constructor(private postulanteService: PostulanteService) { }

  ngOnInit(): void {
    this.postulanteService.getPostulante()
    .subscribe(data => {

      data.filter(post => {
        (post.nombre === 'César' && post.apellido === 'Carabetta') ? this.experiencia = post.experiencia : this.experiencia = data[0].experiencia
         
      } )    
    })
  }

}
