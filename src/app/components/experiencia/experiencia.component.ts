import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  title = 'Experiencia'
  public experiencia: string = "";
  public exp_title: string = "";

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencia()
    .subscribe(data => {
      data.map(exp => {
        this.exp_title = exp.exp_title
        this.experiencia = exp.experiencia
      })
    })
  }

}
