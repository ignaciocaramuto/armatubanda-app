import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() description: string;
  @Input() name: string;
  @Input() image: string;
  @Input() rate: number;
  @Input() rol: string;
  @Input() opinions: number;

  constructor() { }

  ngOnInit(): void {
  }

}
