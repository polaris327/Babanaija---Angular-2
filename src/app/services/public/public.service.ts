import { Injectable, EventEmitter, Input, Output } from '@angular/core';

@Injectable()
export class PublicService {

  constructor() { }

  @Input() showLoginForm:boolean = true;
  @Output() _formFlagUpdated$:EventEmitter<any> = new EventEmitter();

  setFormFlag(flag:boolean):void {
    this.showLoginForm = flag;
    this._formFlagUpdated$.emit(this.showLoginForm);
  }

  getFormFlag$():boolean {
    return this.showLoginForm;
  }

}
