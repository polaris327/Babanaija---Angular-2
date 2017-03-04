import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-topics',
  templateUrl: './list-of-topics.component.html',
  styleUrls: ['./list-of-topics.component.css']
})
export class ListOfTopicsComponent implements OnInit {

  _tab_mode:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
