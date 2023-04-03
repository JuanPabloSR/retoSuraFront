import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CausanteService } from '../../services/causante.service';

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


  constructor(    private router: Router,
    private causanteService: CausanteService) { }

  ngOnInit(): void {

  }

  editarCausante(id: number) {
    this.router.navigate(['/editar/causantes/', id]);
  }

}
