import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() displayFilters = new EventEmitter<boolean>();

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  showFilters(): void {
    this.displayFilters.emit();
  }

}
