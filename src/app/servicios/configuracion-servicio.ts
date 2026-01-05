import { Injectable } from '@angular/core';

export interface Configuracion {
  sePuedeEliminar: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ConfiguracionServicio {
  private configuracion: Configuracion = {
    sePuedeEliminar: false
  };

  constructor() {
    this.cargarConfiguracion();
  }

  private cargarConfiguracion(): void {
    const configuracionGuardada = localStorage.getItem('configuracionApp');
    
    if (configuracionGuardada) {
      try {
        this.configuracion = JSON.parse(configuracionGuardada);
      } catch (error) {
        console.error('Error al cargar configuración:', error);
        this.guardarConfiguracion();
      }
    } else {
      this.guardarConfiguracion();
    }
  }

  private guardarConfiguracion(): void {
    try {
      localStorage.setItem('configuracionApp', JSON.stringify(this.configuracion));
    } catch (error) {
      console.error('Error al guardar configuración:', error);
    }
  }

  obtenerConfiguracion(): Configuracion {
    return { ...this.configuracion };
  }

  obtenersePuedeEliminar(): boolean {
    return this.configuracion.sePuedeEliminar;
  }

  actualizarConfiguracion(nuevaConfiguracion: Partial<Configuracion>): void {
    this.configuracion = { ...this.configuracion, ...nuevaConfiguracion };
    this.guardarConfiguracion();
  }

  restablecerConfiguracion(): void {
    this.configuracion = { sePuedeEliminar: false };
    this.guardarConfiguracion();
  }
}