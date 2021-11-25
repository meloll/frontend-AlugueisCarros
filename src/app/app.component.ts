import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: (["app.component.css"])
})
export class AppComponent {
  title = 'frontend';

  getNav(){
    return getNav();
  }


}

let nav=false;

export function getNav(){
    return nav;
}

export function setNav(nav1: boolean): void{
  nav=nav1;
}
