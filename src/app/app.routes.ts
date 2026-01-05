import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'citas',
    loadComponent: () => import('./paginas/citas/citas.page').then( m => m.CitasPage)
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./paginas/configuracion/configuracion.page').then( m => m.ConfiguracionPage)
  },
];
