import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public aPaises: string[] = [];
  public opcionSeleccionada: string;
  public aContinentes: string [] = ['africa', 'europe', 'americas', 'asia'];
    constructor(private http: Http) { }
    search(title: string) {
      this.aPaises = [];
      const url = 'http://restcountries.eu/rest/v1/region/' + title;
      this.http.get(url).subscribe(
        response => {
          const data = response.json();
          console.log(data);
          for (let i = 0; i < data.length; i++) {
            const paisName = data[i].name;
            this.aPaises.push(paisName);
          }
        },
        error => console.error(error)
      );
    }

    buscarPais() {
      this.aPaises = [];
      const url = 'http://restcountries.eu/rest/v1/region/' + this.opcionSeleccionada;
      this.http.get(url).subscribe(
        response => {
          const data = response.json();
          console.log(data);
          for (let i = 0; i < data.length; i++) {
            const paisName = data[i].name;
            this.aPaises.push(paisName);
          }
        },
        error => console.error(error)
      );
    }
}
