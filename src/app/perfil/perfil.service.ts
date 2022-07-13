import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../listado/usuario.entities';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor() { }

  getUsuario(id: number): Observable<Usuario> {
    return of({
      id: 1,
      nombre: 'Fabricio',
      apellido: 'Gomez',
      rol: 'Guitarrista',
      descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      img: 'https://i.ibb.co/9HD3gMf/img-random.png',
      rate: 4.5,
      opiniones: 15
    });
  }
}
