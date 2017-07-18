import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { LunchMenu }         from './lunchmenu';
import { LunchMenuService }  from './lunchmenu.service';
@Component({
  selector: 'lunchmenu-detail',
  templateUrl: './lunchmenu-detail.component.html',
  styleUrls: [ './lunchmenu-detail.component.css' ]
})
//component class for editing the object parameters. it will subscribe to the items
export class LunchMenuDetailComponent implements OnInit {
  lunchmenu: LunchMenu;
  editimg:string="/img/Edit.svg";
  constructor(
    private lunchmenuService: LunchMenuService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


//method due to interface implementation
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.lunchmenuService.getLunchMenu(+params.get('id')))
      .subscribe(lunchmenu => this.lunchmenu = lunchmenu);
  }

  //event handler for saving and navigating back
  goBack(): void {
    this.location.back();
  }
  saveAndGoBack(): void {
  this.lunchmenuService.update(this.lunchmenu)
    .then(() => this.goBack());
}
}
