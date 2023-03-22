import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { RetoRoutingModule } from './reto-routing.module';
import { ListaCausantesComponent } from './pages/lista-causantes/lista-causantes.component';
import { RegistarCausanteComponent } from './pages/registar-causante/registar-causante.component';
import { CalcularMesadaComponent } from './pages/calcular-mesada/calcular-mesada.component';


@NgModule({
  declarations: [
    ListaCausantesComponent,
    RegistarCausanteComponent,
    CalcularMesadaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RetoRoutingModule
  ]
})
export class RetoModule { }
