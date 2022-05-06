import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() displayFilters = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  showFilters(): void {
    this.displayFilters.emit();
  }

}
