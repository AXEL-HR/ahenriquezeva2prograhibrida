import { Injectable } from '@angular/core';
import { Frases } from '../modelo/frases';

@Injectable({
  providedIn: 'root',
})
export class FraseServicio {
  private _citas: Frases[] = [
    { id: 1, texto: 'El éxito consiste en obtener lo que se desea. La felicidad en disfrutar lo que se obtiene.', autor: 'Ralph Waldo Emerson' },
    { id: 2, texto: 'Las personas no son recordadas por el número de veces que fracasan, sino por el número de veces que tienen éxito.', autor: 'Thomas Edison' },
    { id: 3, texto: 'Ningún viento es bueno para un barco que no sabe adónde va.', autor: 'Séneca' }
  ];
  private proximoId: number = 4;

  constructor() {}

  obtenerCitasAleatoria(): Frases[] {
    const citasAleatorias = Math.floor(Math.random() * this._citas.length);
    return [this._citas[citasAleatorias]];
  }
  eliminarCita(id: number): void {
    this._citas = this._citas.filter(cita => cita.id !== id);
  }
  agregarCita(texto: string, autor: string): Frases {
    const nuevaCita: Frases = {
      id: this.proximoId++,
      texto,
      autor
    };
    this._citas.push(nuevaCita);
    return nuevaCita
  }
}
