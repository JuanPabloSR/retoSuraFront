import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { RetoRoutingModule } from './reto-routing.module';
import { ListaCausantesComponent } from './pages/lista-causantes/lista-causantes.component';
import { RegistarCausanteComponent } from './pages/registar-causante/registar-causante.component';
import { CalcularMesadaComponent } from './pages/calcular-mesada/calcular-mesada.component';
import { ValidarCausanteComponent } from './components/validar-causante/validar-causante.component';
import { AgregarCausanteComponent } from './components/agregar-causante/agregar-causante.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListaCausantesComponent,
    RegistarCausanteComponent,
    CalcularMesadaComponent,
    ValidarCausanteComponent,
    AgregarCausanteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RetoRoutingModule,
    SharedModule
  ],


})
export class RetoModule { }
