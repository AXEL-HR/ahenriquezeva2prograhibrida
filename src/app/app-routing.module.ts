import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./paginas/home/home.page').then(m => m.HomePage) },
  { path: 'citas', loadComponent: () => import('./paginas/citas/citas.page').then(m => m.CitasPage) },
  { path: 'configuracion', loadComponent: () => import('./paginas/configuracion/configuracion.page').then(m => m.ConfiguracionPage) }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule {}