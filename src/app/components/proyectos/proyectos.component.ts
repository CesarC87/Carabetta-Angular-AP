import { Component, OnInit } from '@angular/core';
import { ProyectosCardComponent } from '../proyectos-card/proyectos-card.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  title = 'Proyectos'
  constructor() { }

  ngOnInit(): void {
  }

}
