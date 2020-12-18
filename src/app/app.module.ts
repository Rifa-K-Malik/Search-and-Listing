import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ListingComponent } from './components/listing/listing.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { GridProfileComponent } from './components/grid-profile/grid-profile.component';
import { ProfilehomeComponent } from './components/profilehome/profilehome.component';
import { ProfilesidebarComponent } from './components/profilehome/profilesidebar/profilesidebar/profilesidebar.component';
import { TravellersComponent } from './components/profilehome/travellers/travellers/travellers.component';
import { LogindetailsComponent } from './components/profilehome/logindetails/logindetails/logindetails.component';
import { ProfiledetailsComponent } from './components/profilehome/profiledetails/profiledetails/profiledetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListingComponent,
    ProfileComponent,
    GridProfileComponent,
    ProfilehomeComponent,
    ProfilesidebarComponent,
    LogindetailsComponent,
    ProfiledetailsComponent,
    TravellersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
