import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from "./layout/main/main.component";
import {AuthComponent} from "./components/auth/auth.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',

    component: MainComponent,
    children: [
      {
        path: '',
        component: AuthComponent
      }
    ]
  },
  {
    path: 'forum',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: './components/forum/forum.module#ForumModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
