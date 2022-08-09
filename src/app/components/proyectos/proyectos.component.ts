import { Component, OnInit } from '@angular/core';
import { ProyectosCardComponent } from '../proyectos-card/proyectos-card.component';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  title = 'Proyectos'
  public proyectos:any = [];

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.proyectosService.getProyectos()
    .subscribe(data => {
      this.proyectos = data
      console.log(this.proyectos)
    })
  }

}
