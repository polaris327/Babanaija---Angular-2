import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {PublicService} from "../../services/public/public.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  is_logged_in:boolean = false;
  showLoginForm:boolean = true;
  isCollapsed:boolean = false;

  constructor(
    private _publicService: PublicService,
    private ref: ChangeDetectorRef,
    private _router:Router
  ) {
    this._router.events.subscribe(
      (event) => {
        if (event.url == '/') {
          this.is_logged_in = false;
        } else {
          this.is_logged_in = true;
        }
      }
    )
  }

  onClickedOutside(e: Event) {
    if (this.isCollapsed) {
      this.isCollapsed = false;
    }
  }

  onNavBarClick() {
    setTimeout(() => {
      this.isCollapsed = !this.isCollapsed;
      this.ref.markForCheck();
    }, 500);
  }

  ngOnInit() {
    this._publicService._formFlagUpdated$.subscribe(
      (flag) => {
        this.showLoginForm = this._publicService.showLoginForm;
      }
    )
  }

  private setFlag(flag:boolean):void {
    this._publicService.setFormFlag(flag);
  }


}
