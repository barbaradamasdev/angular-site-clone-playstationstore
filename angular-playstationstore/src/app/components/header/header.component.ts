import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  toogleMenuActive:boolean = true;

  toogleMenu() {
    if (this.toogleMenuActive) {
      this.toogleMenuActive = false;
    } else {
      this.toogleMenuActive = true;
    }
  }
}
