import { Component, OnInit } from '@angular/core';
import { PostulanteService } from 'src/app/services/postulante.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {

  public sobreMi: string = "";

  constructor(private postulanteService: PostulanteService) { }

  ngOnInit(): void {
    this.postulanteService.getPostulante()
    .subscribe(data => {
      data.filter(post => {
        (post.nombre === 'César' && post.apellido === 'Carabetta') ? this.sobreMi = post.sobreMi : this.sobreMi = data[0].sobreMi         
      } )    
    })
  }

}
