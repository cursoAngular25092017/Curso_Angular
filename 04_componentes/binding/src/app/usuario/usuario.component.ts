import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public oUsuario: {nombre: string, apellido: string};

  public aAficiones: Array<string>;

  public vPensamientos: Array<string>;

  public nPensamiento: string;

  constructor() { }

  ngOnInit() {
    this.oUsuario = {nombre: 'Juan', apellido: 'Sanchez'};
    this.aAficiones = ['Leer', 'Viajar', 'Comer'];
    this.vPensamientos = [];
    this.nPensamiento = '';
  }
  btnBorrar(ev) {

    this.oUsuario.nombre = '';
    this.oUsuario.apellido = '';
    console.log(ev);
  }

  btnAddPensamiento() {
    this.vPensamientos.push(this.nPensamiento);
    this.nPensamiento = '';
      }
}
