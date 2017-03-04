import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-box',
  templateUrl: './story-box.component.html',
  styleUrls: ['./story-box.component.css']
})
export class StoryBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  story:any = {
    id: '',
    title: 'Handmade',
    content: 'Integer suscipit pretium pulvinar. Etiam et maximus purus.',
    tags: ['Politics', 'Crime', 'Corruption', 'Buy', 'Embroidery', 'Kntting', 'Scrapbooking', 'Buy'],
    topics: '87',
    media: ''
  };

}
