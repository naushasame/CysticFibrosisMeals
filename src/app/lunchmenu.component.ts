import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//user defined imports
import { LunchMenu } from './lunchmenu';
import { LunchMenuService } from './lunchmenu.service';

@Component({
  selector: 'my-lunchmenu',
  templateUrl: './lunchmenu.component.html', //templates added as files for efficiency
  styleUrls: [ './lunchmenu.component.css' ]
})
export class LunchMenuComponent implements OnInit {
  lunchmenus: LunchMenu[];
  selectedlunchmenu: LunchMenu;
  cuttleries:string="/img/cuttleries.svg";
  editIcon:string="/img/edit-icon.png";
  deleteIcon:string="/img/IconRemove.png";
  addIcon:string="/img/addIcon.png";

  constructor(
    private router: Router,
    private lunchmenuService: LunchMenuService) { }

  getLunchMenus(): void {
    this.lunchmenuService.getLunchMenus().then(lunchmenus => this.lunchmenus = lunchmenus);
  }

  //method from Inteface
  ngOnInit(): void {
    this.getLunchMenus();
  }

//selecting single item causes setting that item into a varible for editing purpose
  onSelect(lunchmenu: LunchMenu): void {
    this.selectedlunchmenu = lunchmenu;
  }

  //used for bidirectional data-binding using [()]
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedlunchmenu.id]);
  }
  addLunchMeal(lunchMeal: string,lunchMealavgmealcost:number): void {
  lunchMeal = lunchMeal.trim();
  if (!lunchMeal||!lunchMealavgmealcost) { return; }
  this.lunchmenuService.create(lunchMeal,lunchMealavgmealcost)
    .then(lunchmenu => {
      this.lunchmenus.push(lunchmenu);
      this.selectedlunchmenu = null;
    });
}
  deleteLunchMeal(lunchMeal: LunchMenu): void {
  this.lunchmenuService
      .delete(lunchMeal.id)
      .then(() => {
        this.lunchmenus = this.lunchmenus.filter(l => l !== lunchMeal);
        if (this.selectedlunchmenu === lunchMeal) { this.selectedlunchmenu = null; }
      });
}
}
