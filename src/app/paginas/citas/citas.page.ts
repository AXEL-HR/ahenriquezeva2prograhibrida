import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FraseServicio } from 'src/app/servicios/frase-servicio';
import { CompFraseComponent } from 'src/app/componentes/comp-frase/comp-frase.component';
import { FomularioComponent } from 'src/app/componentes/fomulario/fomulario.component';
import { Frases } from 'src/app/modelo/frases';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CompFraseComponent, FomularioComponent],
})
export class CitasPage implements OnInit {

   citas: Frases[] = [];

  constructor(private servicioCitas: FraseServicio) {}

  ngOnInit(): void {
    this.cargarCitas();
  }

  cargarCitas(): void {
    this.citas = this.servicioCitas.obtenerTodasCitas();
  }

  alAgregarCita(nuevaCita: {texto: string, autor: string}): void {
    this.servicioCitas.agregarCita(nuevaCita.texto, nuevaCita.autor);
    this.cargarCitas();
  }

  alEliminarCita(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta cita?')) {
      this.servicioCitas.eliminarCita(id);
      this.cargarCitas();
    }
  }
}
