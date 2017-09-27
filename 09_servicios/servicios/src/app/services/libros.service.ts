import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {
public listaLibros: Array<string>;
  constructor() { }

  getLibros(libro) {
    this.listaLibros = ['Angular 2.0', 'Angular 2.0 in Action', 'Angular 2.0 para dummies'];
    return (this.listaLibros);
  }

}
