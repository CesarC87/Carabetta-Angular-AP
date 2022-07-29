import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-separator',
  templateUrl: './title-separator.component.html',
  styleUrls: ['./title-separator.component.scss']
})
export class TitleSeparatorComponent implements OnInit {
  
  @Input() title = '' ;

  constructor() { }

  ngOnInit(): void {
  }

}
