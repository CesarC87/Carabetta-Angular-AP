import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-separator-izq',
  templateUrl: './title-separator-izq.component.html',
  styleUrls: ['./title-separator-izq.component.scss']
})
export class TitleSeparatorIzqComponent implements OnInit {

  @Input() title = '' ;

  constructor() { }

  ngOnInit(): void {
  }

}
