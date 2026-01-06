import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfiguracionServicio } from 'src/app/servicios/configuracion-servicio';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonListHeader, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonListHeader, IonIcon]
})
export class ConfiguracionPage {
  puedeEliminarEnInicio: boolean = false;

  constructor(private servicioConfiguracion:ConfiguracionServicio) { }

  ngOnInit(): void {
    this.cargarConfiguracion();
  }
  cargarConfiguracion(): void {
    this.puedeEliminarEnInicio = this.servicioConfiguracion.obtenersePuedeEliminar();
  }


  alCambiarConfiguracion(): void {
    this.servicioConfiguracion.actualizarConfiguracion({
      sePuedeEliminar: this.puedeEliminarEnInicio
    });
    console.log('Configuración cambiada:', this.puedeEliminarEnInicio);
  }

  alRestablecerConfiguracion(): void {
    if (confirm('¿Restablecer configuración a valores por defecto?')) {
      this.servicioConfiguracion.restablecerConfiguracion();
      this.cargarConfiguracion();
      alert('Configuración restablecida');
    }
  }

}


 
