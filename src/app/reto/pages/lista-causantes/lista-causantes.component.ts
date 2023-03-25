import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-causantes',
  templateUrl: './lista-causantes.component.html',
  styles: [
    `.table td {
      color: white;
    }`
  ]
})
export class ListaCausantesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
