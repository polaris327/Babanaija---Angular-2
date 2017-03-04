import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-box',
  templateUrl: './topic-box.component.html',
  styleUrls: ['./topic-box.component.css']
})
export class TopicBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  topic:any = {
    id: '',
    title: 'Training Program',
    topic: 'Building muscle',
    timeElapsed: '20',
    content: " Hi all this is what I have been doing in the gym in the gym and was wondering if I'm hitting ...",
    comment: '12',
    user: {
      username: 'Chad Spencer'
    },
    media: '',
    likes: '651',
    notes: '32',
    favorite: '2',
    stared: true,
    mine: true
  };
}
