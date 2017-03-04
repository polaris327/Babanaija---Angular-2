import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {PublicService} from "../../services/public/public.service";
import {AppRoutingModule} from "../../app.routing";

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    PublicService
  ]
})
export class AuthModule { }
