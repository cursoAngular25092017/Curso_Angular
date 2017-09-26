import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabeza2',
  templateUrl: './cabeza2.component.html',
  styleUrls: ['./cabeza2.component.css']
})
export class Cabeza2Component implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'angular';
  }

}
