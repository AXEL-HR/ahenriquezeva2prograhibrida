import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CompFraseComponent } from './componentes/comp-frase/comp-frase.component';
import { FomularioComponent } from './componentes/fomulario/fomulario.component';

// Páginas
import { HomePage } from './paginas/home/home.page';
import { CitasPage } from './paginas/citas/citas.page';
import { ConfiguracionPage } from './paginas/configuracion/configuracion.page';

// Servicios
import { FraseServicio } from './servicios/frase-servicio';
import { ConfiguracionServicio } from './servicios/configuracion-servicio';
import { ValidacionServicio } from './servicios/validacion-servicio';

@NgModule({
  declarations: [
    AppComponent,
    // Componentes
    CompFraseComponent,
    FomularioComponent,
    // Páginas
    HomePage,
    CitasPage,
    ConfiguracionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Servicios
    FraseServicio,
    ConfiguracionServicio,
    ValidacionServicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}