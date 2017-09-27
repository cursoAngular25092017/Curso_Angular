import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Output()
  public eventoBorrar= new EventEmitter<boolean>();
  @Input()
  public sUsuario: string;
  constructor() { }

  ngOnInit() {}

  btnBorrar(event) {
    console.log(event);
    this.eventoBorrar.emit(true);
  }

}
