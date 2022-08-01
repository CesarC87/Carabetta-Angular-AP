import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-circle-progress-bar',
  templateUrl: './skill-circle-progress-bar.component.html',
  styleUrls: ['./skill-circle-progress-bar.component.scss']
})
export class SkillCircleProgressBarComponent implements OnInit {

  counter = 0;  
  @Input() percentage:number = 0 ; // Aqui debe especificarse el porcentaje de la habilidad
  @Input() skill:string = "" // Aqui debe especificarse el nombre de la habilidad 
    
  constructor() { }
  
  ngOnInit(): void {    
    setInterval(()=> {
      this.counter == this.percentage ? clearInterval() : this.counter += 1         
    }, 20)        
  }

}
