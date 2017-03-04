import { Component, OnInit } from '@angular/core';
import {PublicService} from "../../services/public/public.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private _publicService:PublicService
  ) {
    this.showLoginForm = this._publicService.showLoginForm;
  }

  showLoginForm:boolean = true;

  ngOnInit() {
    this._publicService._formFlagUpdated$.subscribe(
      (flag) => {
        this.showLoginForm = this._publicService.getFormFlag$();
      }
    )
  }

}
