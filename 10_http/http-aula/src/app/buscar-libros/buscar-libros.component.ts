import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
@Component({
  selector: 'app-buscar-libros',
  templateUrl: './buscar-libros.component.html',
  styleUrls: ['./buscar-libros.component.css']
})
export class BuscarLibrosComponent implements OnInit {

  public claveBusqueda: string;
  public aResultados: Array<any>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.claveBusqueda = '';
    this.aResultados = [];
  }

  btnBuscar() {
    this.http.get(URL + this.claveBusqueda).subscribe(
      response => console.log(response));
  }

}
