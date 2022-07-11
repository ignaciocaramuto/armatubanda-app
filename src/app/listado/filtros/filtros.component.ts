import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { FiltrosService } from './filtros.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  name: string;
  
  userType: any[];
  selectedUser: any;

  instruments: any[];

  genres: any[];

  multipleOptions: any[];
  selectedMultipleOptions: any[];

  experience: any[];
  selectedExperience: string;

  @Input() display;

  ratingValues: number[] = [1,5];

  constructor(private filtrosService: FiltrosService) {
    this.experience = [
      {
        id: 1,
        año: 'Menos de 1 año'
      },
      {
        id: 2,
        año: 'Entre 1 y 3 años'
      },
      {
        id: 3,
        año: 'Entre 3 y 5 años'
      },
      {
        id: 4,
        año: 'Más de 5 años'
      }
    ]
  }

  ngOnInit(): void {
    forkJoin([
      this.filtrosService.getTiposUsuarios(),
      this.filtrosService.getGeneros(),
      this.filtrosService.getInstrumentos()
    ]).subscribe(([tiposUsuarios, generos, instrumentos]: [any[], any[], any[]]) => {
        this.userType = tiposUsuarios;
        this.genres = generos;
        this.instruments = instrumentos;
        this.multipleOptions = instrumentos //TODO: setear por default los filtros seleccionados en home
      }
    )
  }

  changeMultiSelectOptions(): void {
    if (this.selectedUser.id === 1) {
      this.multipleOptions = this.instruments;
    } else if (this.selectedUser.id === 2) {
      this.multipleOptions = this.genres;
    }
  }

  clearFilters(): void {
    this.name = null;
    this.selectedExperience = null;
    this.selectedMultipleOptions = [];
    this.selectedUser = null;
    this.ratingValues = [1,5];
  }

}
