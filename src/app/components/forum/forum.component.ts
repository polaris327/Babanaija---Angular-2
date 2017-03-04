import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

export enum URLState {
  communication,
  trending,
  unresolved
}

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})

export class ForumComponent implements OnInit {

  show_banner:boolean = true;
  is_profile:boolean = false;
  is_list_of_topics:boolean = false;
  is_discussion:boolean = false;
  is_new_form:boolean = false;

  constructor(
    private _router:Router
  ) {
    this._router.events.subscribe(
      (event) => {
        if (event.url === '/forum/profile' || event.url === '/forum/communities/profile') {
          this.show_banner = false;
          this.is_profile = true;
          this.is_list_of_topics = false;
          this.is_discussion = false;
          this.is_new_form = false;
        } else if (event.url === '/forum/list-of-topics'){
          this.show_banner = false;
          this.is_profile = false;
          this.is_list_of_topics = true;
          this.is_discussion = false;
          this.is_new_form = false;
        } else if (event.url === '/forum/discussion'){
          this.show_banner = false;
          this.is_profile = false;
          this.is_list_of_topics = false;
          this.is_discussion = true;
          this.is_new_form = false;
        } else if (event.url === '/forum/communication' || event.url === '/forum/trending' || event.url === '/forum') {
          this.show_banner = true;
          this.is_profile = false;
          this.is_list_of_topics = false;
          this.is_discussion = false;
          this.is_new_form = false;
        } else if (event.url === '/forum/new-post') {
          this.show_banner = false;
          this.is_profile = false;
          this.is_list_of_topics = false;
          this.is_discussion = false;
          this.is_new_form = true;
        } else {
          console.log(event);
        }
      }
    )
  }

  ngOnInit() {
  }

}
