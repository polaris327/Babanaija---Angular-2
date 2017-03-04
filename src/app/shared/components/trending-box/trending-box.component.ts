import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-box',
  templateUrl: './trending-box.component.html',
  styleUrls: ['./trending-box.component.css']
})
export class TrendingBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  trending:any = {
    id: '',
    title: 'Training Program',
    topic: 'Building muscle',
    timeElapsed: '20',
    content: "Hi all this is what I have been doing in the gym and was wondering if I'm hitting all the right areas. If so are these workouts something that's going to aid in building muscle I'm also clean eating really well. Any pointers or help would be great thank you",
    comment: '12',
    user: {
      username: 'Chad Spencer'
    },
    media: ''
  };
}
