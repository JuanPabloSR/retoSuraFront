import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'arus',
    loadChildren: () => import('./reto/reto.module').then((m) => m.RetoModule),
  },
  {
    path: '**',
    redirectTo: 'arus'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
