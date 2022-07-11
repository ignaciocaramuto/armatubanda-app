import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { FiltrosService } from './filtros.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  
  userType: any[];
  selectedUser: any;

  instruments: any[];
  selectedInstruments: any[];

  genres: any[];
  selectedGenres: any[];

  multipleOptions: any[];
  selectedMultipleOptions: any[];

  @Input() display;

  ratingValues: number[] = [1,5];

  constructor(private filtrosService: FiltrosService) {}

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

}
