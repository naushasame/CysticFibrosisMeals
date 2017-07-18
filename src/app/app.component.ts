import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `  
   <h1>{{title}}</h1>
    <img src={{cficon}} class="cficon"/>
    <nav>
      <a routerLink="/favlunch" routerLinkActive="active">Favourite Lunches</a>
      <a routerLink="/lunchmenu" routerLinkActive="active">Lunch Meal List</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cficon:string="/img/can-stock-photo_cf.jpg";
  title = 'Cystic Fibrosis Lunch Meal Ideas';
}
