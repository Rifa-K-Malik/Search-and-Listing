import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Search-and-Listing';
  constructor(
    private dialog:MatDialog
  ) {}
  
ngOnInit(): void {
  
}
OpenDialog(){
  this.dialog.open(SearchComponent ,{
    height:'90vh',
    width: '40%'
  })
}
}
