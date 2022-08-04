import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
  title = "Educacion"
  public educacion:any = [];

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.educacionService.getEducacion()
    .subscribe(data => {
      this.educacion = data
      console.log(this.educacion)
    })
  }

}
