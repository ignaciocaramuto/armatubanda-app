import { Component, OnInit } from '@angular/core';
import { ListadoService } from './listado.service';
import { Usuario } from './usuario.entities';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  showFilters = true;

  users: Usuario[] = [];

  constructor(private listService: ListadoService) { }

  ngOnInit(): void {
    this.listService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  displayFilters(): void {
    this.showFilters = !this.showFilters;
  }

}
