import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistarCausanteComponent } from './pages/registar-causante/registar-causante.component';
import { ListaCausantesComponent } from './pages/lista-causantes/lista-causantes.component';
import { CalcularMesadaComponent } from './pages/calcular-mesada/calcular-mesada.component';
import { ValidarCausantesComponent } from './pages/validar-causantes/validar-causantes.component';
import { EditarCausantesComponent } from './pages/editar-causantes/editar-causantes.component';

const routes: Routes = [

  {
    path: '',
    children: [
     { path: 'validar-causantes', component: ValidarCausantesComponent},
     { path: 'registrar-causante', component: RegistarCausanteComponent},
     { path: 'editar-causantes/:id', component: EditarCausantesComponent},
     { path: 'lista-causantes', component: ListaCausantesComponent},
     { path: 'calcular-mesada', component: CalcularMesadaComponent},
     { path: '**', redirectTo: 'validar-causantes'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetoRoutingModule { }
