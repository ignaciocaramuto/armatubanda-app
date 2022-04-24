import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchText: string;

  options: any[];
  selectedOption: string;

  constructor() { }

  ngOnInit(): void {
    this.options = [
      {name: 'Músicos', code: '1'},
      {name: 'Bandas', code: '2'},
    ];
  }

}
