import { Component, OnInit } from '@angular/core';

interface Month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  month: Month[] = [
    {value: 'January-0', viewValue: 'January'},
    {value: 'February-1', viewValue: 'February'},
    {value: 'March-2', viewValue: 'March'},
    {value: 'April-3', viewValue: 'April'},
    {value: 'May-4', viewValue: 'May'},
    {value: 'June-5', viewValue: 'June'},
    {value: 'July-6', viewValue: 'July'},
    {value: 'August-7', viewValue: 'August'},
    {value: 'September-8', viewValue: 'September'},
    {value: 'October-9', viewValue: 'October'},
    {value: 'November-10', viewValue: 'November'},
    {value: 'December-11', viewValue: 'December'}
  ];

  ngOnInit(): void {
  }

}
