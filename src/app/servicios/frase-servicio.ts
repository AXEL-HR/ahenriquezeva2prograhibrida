import { Injectable } from '@angular/core';
import { Frases } from '../modelo/frases';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class FraseServicio {

  private async inicializarBaseDatosSQLite(): Promise<void> {
    console.log('Base de datos SQLite inicializada.');
  }

  private _citas: Frases[] = [];
  private citas:Frases[] = [];
  private siguienteId = 1;
  private readonly CLAVE_ALMACENAMIENTO = 'citasApp'

  constructor(private plataforma: Platform) {
    this.inicializarDatos();
  }

  private inicializarDatos(): void {
    if (this.plataforma.is('cordova') || this.plataforma.is('capacitor')) {
      this.inicializarSQLite();
    } else {
      this.cargarDesdeAlmacenamientoWeb();
    }
  }

  private inicializarSQLite(): void {
    console.log('Inicializando SQLite...');

    this._citas = [
      { id: 1, texto: 'El éxito consiste en obtener lo que se desea. La felicidad en disfrutar lo que se obtiene.', autor: 'Ralph Waldo Emerson' },
    { id: 2, texto: 'Las personas no son recordadas por el número de veces que fracasan, sino por el número de veces que tienen éxito.', autor: 'Thomas Edison' },
    { id: 3, texto: 'Ningún viento es bueno para un barco que no sabe adónde va.', autor: 'Séneca' }];
    this.siguienteId = 4;}

  private cargarDesdeAlmacenamientoWeb(): void {
    const citasGuardadas = localStorage.getItem(this.CLAVE_ALMACENAMIENTO);
    
    if (citasGuardadas) {
      try {
        const datos = JSON.parse(citasGuardadas);
        this.citas = datos.citas || [];
        this.siguienteId = datos.siguienteId || 1;
      } catch (error) {
        console.error('Error al cargar citas:', error);
        this.citas = [];
        this.siguienteId = 1;
      }
    }
  }

  private guardarEnAlmacenamientoWeb(): void {
    try {
      const datos = {
        citas: this.citas,
        siguienteId: this.siguienteId
      };
      localStorage.setItem(this.CLAVE_ALMACENAMIENTO, JSON.stringify(datos));
    } catch (error) {
      console.error('Error al guardar citas:', error);
    }
  }

  private guardarEnSQLite(): void {
    console.log('Guardando en SQLite...');
  }

  private guardarCitas(): void {
    if (this.plataforma.is('cordova') || this.plataforma.is('capacitor')) {
      this.guardarEnSQLite();
    } else {
      this.guardarEnAlmacenamientoWeb();
    }
  }

  obtenerCitasAleatoria(): Frases[] {
    const citasAleatorias = Math.floor(Math.random() * this._citas.length);
    return [this._citas[citasAleatorias]];
  }
  obtenerTodasCitas(): Frases[] {
    return [...this._citas];
  }
  obtenerCitasTotales(): Frases[] {
    return [...this._citas];
  }
  agregarCita(texto: string, autor: string): Frases {
    const nuevaCita: Frases = {
      id: this.siguienteId++,
      texto,
      autor
    };
    this._citas.push(nuevaCita);
    return nuevaCita
  }

  eliminarCita(id: number): boolean {
    const longitudInicial = this.citas.length;
    this.citas = this.citas.filter(cita => cita.id !== id);
    
    if (this.citas.length < longitudInicial) {
      this.guardarCitas();
      return true;
    }
    return false;
  }

  obtenerTotalCitas(): number {
    return this.citas.length;
  }

  limpiarTodasCitas(): void {
    this.citas = [];
    this.siguienteId = 1;
    this.guardarCitas();
  }
}
