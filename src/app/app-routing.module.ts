import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListingComponent } from './components/listing/listing.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [

  {
    path: '',
    component:AppComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'listing',
    component:ListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
