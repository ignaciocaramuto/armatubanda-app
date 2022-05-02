import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchText: string;

  singleOptions: any;
  multipleOptions: any;

  arrayGeneros: any;
  arrayInstrumentos: any;

  selectedOption: number;
  selectedMultipleOptions: string[];
  disableMultiselect = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTipos();
    this.getGeneros();
    this.getInstrumentos();
    
  }

  getTipos(){
    this.http.get('https://localhost:5001/api/tipos').subscribe({
      next: response => this.singleOptions = response,
      error: error => console.log(error)
    })
  }

  getGeneros(){
    this.http.get('https://localhost:5001/api/generos').subscribe({
      next: response => this.arrayGeneros = response,
      error: error => console.log(error)
    })
  }

  getInstrumentos(){
    this.http.get('https://localhost:5001/api/instrumentos').subscribe({
      next: response => this.arrayInstrumentos = response,
      error: error => console.log(error)
    })
  }
  
  changeMultiSelectOptions(): void {
    this.disableMultiselect = false;
    if (this.selectedOption === 1) {
      this.multipleOptions = this.arrayInstrumentos;
    } else if (this.selectedOption === 2) {
      this.multipleOptions = this.arrayGeneros;
    }
  }
}
