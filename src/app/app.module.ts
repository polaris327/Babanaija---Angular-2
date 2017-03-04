import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app.routing';
import {Ng2BootstrapModule} from 'ng2-bootstrap';

import {AppComponent} from './app.component';
import {MenuComponent} from './layout/menu/menu.component';
import {MainComponent} from './layout/main/main.component';

import {PublicService} from './services/public/public.service';

import {AuthModule} from "./components/auth/auth.module";
import {FooterComponent} from "./layout/footer/footer.component";
import {SubscribeComponent} from "./layout/subscribe/subscribe.component";
import {ClickOutsideModule} from 'ng-click-outside';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    FooterComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    AppRoutingModule,
    AuthModule,
    ClickOutsideModule
  ],
  providers: [
    PublicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
