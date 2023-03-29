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
import { ValidarCausantesComponent } from './pages/validar-causantes/validar-causantes.component';
import { AgregarBeneficiarioComponent } from './components/agregar-beneficiario/agregar-beneficiario.component';
import { EditarCausantesComponent } from './pages/editar-causantes/editar-causantes.component';


@NgModule({
  declarations: [
    ListaCausantesComponent,
    RegistarCausanteComponent,
    CalcularMesadaComponent,
    ValidarCausanteComponent,
    AgregarCausanteComponent,
    ValidarCausantesComponent,
    AgregarBeneficiarioComponent,
    EditarCausantesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RetoRoutingModule,
    SharedModule
  ],


})
export class RetoModule { }
