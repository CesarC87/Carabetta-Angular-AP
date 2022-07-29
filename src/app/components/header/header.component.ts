import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nombre:string = 'César Carabetta'
  linkedin:string = "https://www.linkedin.com/in/cesar-carabetta/"
  github:string = "https://github.com/CesarC87"
  mail:string = "mailto:carabetta87@gmail.com"

  constructor() { }

  ngOnInit(): void {
  }

}
