import { Component } from '@angular/core';

interface MenuItems {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
    li {
      cursor:pointer;
    }
    `
  ]
})
export class NavbarComponent {

  menuItems: MenuItems[] = [
    {
      ruta:'arus/validar-causantes',
      nombre: 'Validar Causante'
    },
    {
      ruta:'arus/registrar-causante',
      nombre: 'Registrar Causante'
    },
    {
      ruta:'arus/lista-causantes',
      nombre: 'Lista Causantes'
    },
    {
      ruta:'arus/calcular-mesada',
      nombre: 'Calcular Mesada'
    },
  ]

}
