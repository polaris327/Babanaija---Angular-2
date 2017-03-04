import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommunicationComponent } from "./communication/communication.component";
import {ForumRoutingModule} from './forum.routing';
import {ForumComponent} from "./forum.component";
import {TrendingComponent} from "./trending/trending.component";
import {RecentComponent} from "./sidebar/recent/recent.component";
import {CategoryComponent} from "./sidebar/category/category.component";
import {ProfileComponent} from "./profile/profile.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {BannerComponent} from "./banner/banner.component";
import {ProfileHeaderComponent} from "./profile-header/profile-header.component";
import {ProfileOtherComponent} from "./profile-other/profile-other.component";
import {ListOfTopicsComponent} from "./list-of-topics/list-of-topics.component";
import {ListOfTopicsHeaderComponent} from "./list-of-topics-header/list-of-topics-header.component";
import {DiscussionHeaderComponent} from "./discussion-header/discussion-header.component";
import {DiscussionComponent} from "./discussion/discussion.component";
import {NewPostComponent} from "./new-post/new-post.component";
import {AdsComponent} from "./sidebar/ads/ads.component";
import {StoryBoxComponent} from "../../shared/components/story-box/story-box.component";
import {TrendingBoxComponent} from "../../shared/components/trending-box/trending-box.component";
import {TopicBoxComponent} from "../../shared/components/topic-box/topic-box.component";

@NgModule({
  declarations: [
    CommunicationComponent,
    ForumComponent,
    TrendingComponent,
    RecentComponent,
    CategoryComponent,
    ProfileComponent,
    SidebarComponent,
    BannerComponent,
    ProfileHeaderComponent,
    ProfileOtherComponent,
    ListOfTopicsComponent,
    ListOfTopicsHeaderComponent,
    DiscussionHeaderComponent,
    DiscussionComponent,
    NewPostComponent,
    AdsComponent,
    StoryBoxComponent,
    TrendingBoxComponent,
    TopicBoxComponent
  ],
  imports: [
    ForumRoutingModule,
    CommonModule
  ],
  providers: []
})
export class ForumModule { }
