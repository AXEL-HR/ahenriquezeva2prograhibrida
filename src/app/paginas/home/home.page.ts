import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { ConfiguracionServicio } from 'src/app/servicios/configuracion-servicio';
import { FraseServicio } from 'src/app/servicios/frase-servicio';
import { Frases } from 'src/app/modelo/frases';
import { CommonModule } from '@angular/common';
import { CompFraseComponent } from 'src/app/componentes/comp-frase/comp-frase.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, CompFraseComponent],
})

export class HomePage implements OnInit {
  citaActual: Frases | null = null;
  sePuedeEliminar: boolean = false;

  constructor(private servicioCitas: FraseServicio
    , private servicioConfiguracion: ConfiguracionServicio
  ) {}

  ngOnInit(): void {
    this.cargarCitaAleatoria();
    this,this.cargarCitaAleatoria();
  }

  cargarConfiguracion(): void {
    this.sePuedeEliminar = this.servicioConfiguracion.obtenersePuedeEliminar();
  }

  cargarCitaAleatoria(): void {
    const citas = this.servicioCitas.obtenerCitasAleatoria();
    this.citaActual = citas.length > 0 ? citas[0] : null;
  }

  cambiarCita(): void {
    this.cargarCitaAleatoria();
  }

  eliminarCita(id: number): void {
    if (this.sePuedeEliminar) {
      if (confirm('¿Estás seguro de eliminar esta cita?')) {
        const eliminada = this.servicioCitas.eliminarCita(id);
        if (eliminada) {
          this.cargarCitaAleatoria();
        }
      }
    } else {
      alert('La eliminación de citas en el inicio está deshabilitada en la configuración');
    }
  }
}