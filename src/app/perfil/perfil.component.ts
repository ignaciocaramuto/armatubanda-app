import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Usuario } from '../listado/usuario.entities';
import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  idUsuario: number;
  usuario: Usuario;

  constructor(private route: ActivatedRoute, private servicioPerfil: PerfilService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.idUsuario = params['id']);
    this.servicioPerfil.getUsuario(this.idUsuario).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

}
