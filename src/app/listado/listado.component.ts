import { Component, OnInit } from '@angular/core';
import { ListadoService } from './listado.service';
import { Usuario } from './usuario.entities';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  showFilters = false;

  users: Usuario[] = [];

  constructor(private listService: ListadoService) { }

  ngOnInit(): void {
    this.listService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  displayFilters(): void {
    if (this.showFilters) {
      this.showFilters = false;
    } else {
      this.showFilters = true;
    }
  }

}
