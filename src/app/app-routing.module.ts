import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavLunchComponent }   from './favlunch.component';
import { LunchMenuComponent }      from './lunchmenu.component';
import { LunchMenuDetailComponent }  from './lunchmenu-detail.component';

//all routes added here for ease of management
const routes: Routes = [
  { path: '', redirectTo: '/favlunch', pathMatch: 'full' },
  { path: 'favlunch',  component: FavLunchComponent },
  { path: 'detail/:id', component: LunchMenuDetailComponent },
  { path: 'lunchmenu',     component: LunchMenuComponent }
];
//importing router modules required for navigation
//exporting it, so its available for every component
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
