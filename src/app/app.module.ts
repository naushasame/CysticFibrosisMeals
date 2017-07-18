import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//import of user defined components
import { AppComponent }         from './app.component';
import { FavLunchComponent }   from './favlunch.component';
import { LunchMenuDetailComponent }  from './lunchmenu-detail.component';
import { LunchMenuComponent }      from './lunchmenu.component';
import { LunchMenuService }          from './lunchmenu.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule //routing modules imported once, allowing all future routes to be managed in dedicated file
  ],
  declarations: [
    AppComponent,
    FavLunchComponent,
    LunchMenuDetailComponent,
    LunchMenuComponent
  ],
  providers: [ LunchMenuService ], //services promoted to here, so they dont need to be added locally by others
  bootstrap: [ AppComponent ]
})
export class AppModule { }
