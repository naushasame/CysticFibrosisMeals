import { Component, OnInit } from '@angular/core';

import { LunchMenu } from './lunchmenu';
import { LunchMenuService } from './lunchmenu.service';

@Component({
  selector: 'my-favlunch',
  templateUrl: './favlunch.component.html',
  styleUrls: [ './favlunch.component.css' ]
})
export class FavLunchComponent implements OnInit {

  lunchmenus: LunchMenu[] = [];
  //injecting a service object, without creating one separately
  constructor(private lunchmenuService: LunchMenuService) { }


  //method due to interface implementation from OnInit
  ngOnInit(): void {
    this.lunchmenuService.getLunchMenus()
      .then(lunchmenus => this.lunchmenus = lunchmenus.slice(0, 4));
  }
}
