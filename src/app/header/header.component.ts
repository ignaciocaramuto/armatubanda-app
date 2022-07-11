import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() displayFilters = new EventEmitter<boolean>();

  constructor(public route: Router) { }

  ngOnInit(): void {
    console.log(this.route.url);
    if (this.route.url === '/') {

    }
  }

  showFilters(): void {
    this.displayFilters.emit();
  }

}
