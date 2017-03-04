import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

export enum URLState {
  communication,
  trending,
  unresolved
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebar_case:number = URLState.communication;

  constructor(
    private _router:Router
  ) {
    this._router.events.subscribe(
      (event) => {
        if (event.url === '/forum/communication' || event.url == '/forum/trending') {
          this.sidebar_case = URLState.communication;
        //} else if () {
        //  this.sidebar_case = URLState.trending;
        } else {
          this.sidebar_case = URLState.communication;
        }
      }
    )
  }

  ngOnInit() {
  }
}
