import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registar-causante',
  templateUrl: './registar-causante.component.html',
  styles: [
  ]
})
export class RegistarCausanteComponent implements OnInit {
  mostrarAgregarBeneficiario = false;

  onFormularioCompleto() {
    this.mostrarAgregarBeneficiario = true;
  }

  constructor() { }

  ngOnInit(): void {

  }



}
