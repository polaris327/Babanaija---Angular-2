import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ForumComponent} from "./forum.component";
import {CommunicationComponent} from "./communication/communication.component";
import {TrendingComponent} from "./trending/trending.component";
import {RecentComponent} from "./sidebar/recent/recent.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileOtherComponent} from "./profile-other/profile-other.component";
import {ListOfTopicsComponent} from "./list-of-topics/list-of-topics.component";
import {DiscussionComponent} from "./discussion/discussion.component";
import {NewPostComponent} from "./new-post/new-post.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: 'communication'
  },
  {
    path: '',
    component: ForumComponent,
    children: [
      {
        path: 'communication',
        component: CommunicationComponent
      },
      {
        path: 'trending',
        component: TrendingComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'communities/profile',
        component: ProfileOtherComponent
      },
      {
        path: 'list-of-topics',
        component: ListOfTopicsComponent
      },
      {
        path: 'discussion',
        component: DiscussionComponent
      },
      {
        path: 'new-post',
        component: NewPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ForumRoutingModule {}
