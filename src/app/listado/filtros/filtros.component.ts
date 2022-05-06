import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  
  userType: any[];
  selectedUser: string;

  intruments: any[];
  selectedInstruments: string[];

  @Input() display;

  ratingValues: number[] = [1,5];

  constructor() {
    this.userType = [
      {
        name: 'Musicos',
        code: '1'
      },
      {
        name: 'Bandas',
        code: '1'
      }
    ];
    this.intruments = [
      {
        name: 'Guitarra',
        code: '1'
      },
      {
        name: 'Bajo',
        code: '1'
      },
      {
        name: 'Saxo',
        code: '1'
      },
      {
        name: 'Trompeta',
        code: '1'
      },
      {
        name: 'Piano',
        code: '1'
      },
      {
        name: 'Bateria',
        code: '1'
      }
    ]
  }

  ngOnInit(): void {  
  }

}
