import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { HeaderComponent } from './header/header.component';
import { BikeListComponent } from './bikes/bike-list/bike-list.component';
import { BikeItemComponent } from './bikes/bike-List/bike-item/bike-item.component';
import { BikeDetailComponent } from './bikes/bike-detail/bike-detail.component';
import { BikeEditComponent } from './bikes/bike-edit/bike-edit.component';
import { WishListComponent } from './wish-list/wish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    HeaderComponent,
    BikeListComponent,
    BikeItemComponent,
    BikeDetailComponent,
    BikeEditComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
