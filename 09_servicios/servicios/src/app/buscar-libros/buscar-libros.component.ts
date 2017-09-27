import { LibrosService } from '../services/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-libros',
  templateUrl: './buscar-libros.component.html',
  styleUrls: ['./buscar-libros.component.css']
})
export class BuscarLibrosComponent implements OnInit {

  public claveBusqueda: string;
  public aResultados: Array<any>;

  constructor(private svBuscar: LibrosService) { }

  ngOnInit() {
    this.claveBusqueda = '';
    this.aResultados = [];
  }

  btnBuscar() {
    this.aResultados = this.svBuscar.getLibros(this.claveBusqueda);
  }

}
