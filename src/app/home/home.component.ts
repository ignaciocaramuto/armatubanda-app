import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchText: string;

  singleOptions: any[];
  multipleOptions: any[];
  selectedOption: string;
  selectedMultipleOptions: string[];
  disableMultiselect = true;

  constructor() { }

  ngOnInit(): void {
    this.singleOptions = [
      {name: 'Músicos', code: '1'},
      {name: 'Bandas', code: '2'},
    ];
    this.multipleOptions = [
      {name: 'Rock', code: '1'},
      {name: 'Clásico', code: '2'},
      {name: 'Pop', code: '3'},
      {name: 'Punk', code: '4'},
      {name: 'Jazz', code: '5'}
    ];
  }

  changeMultiSelectOptions(): void {
    this.disableMultiselect = false;
    if (this.selectedOption === '1') {
      this.multipleOptions = [
        {name: 'Guitarra', code: '1'},
        {name: 'Piano', code: '2'},
        {name: 'Violin', code: '3'},
        {name: 'Trompeta', code: '4'},
        {name: 'Bajo', code: '5'}
      ];
    } else if (this.selectedOption === '2') {
      this.multipleOptions = [
        {name: 'Rock', code: '1'},
        {name: 'Clásico', code: '2'},
        {name: 'Pop', code: '3'},
        {name: 'Punk', code: '4'},
        {name: 'Jazz', code: '5'}
      ];
    }
  }
}
