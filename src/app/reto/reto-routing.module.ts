import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistarCausanteComponent } from './pages/registar-causante/registar-causante.component';
import { ListaCausantesComponent } from './pages/lista-causantes/lista-causantes.component';
import { CalcularMesadaComponent } from './pages/calcular-mesada/calcular-mesada.component';

const routes: Routes = [

  {
    path: '',
    children: [
     { path: 'registrar-causante', component: RegistarCausanteComponent},
     { path: 'lista-causantes', component: ListaCausantesComponent},
     { path: 'calcular-mesada', component: CalcularMesadaComponent},
     { path: '**', redirectTo: 'registrar-causante'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetoRoutingModule { }
