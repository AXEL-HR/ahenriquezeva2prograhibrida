import { Injectable } from '@angular/core';

export interface Configuracion {
  tema: 'light' | 'dark';
  sePuedeEliminar: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ConfiguracionServicio {
   private configuracionPorDefecto: Configuracion = {
    sePuedeEliminar: false,
    tema: 'light'
  };

  private config: Configuracion = { ...this.configuracionPorDefecto };

  constructor() {}

  getSettings(): Configuracion {
    return this.config ;
  }

  // Obtener una configuración específica
  getSetting<T extends keyof Configuracion>(key: T): Configuracion[T] {
    return this.config[key];
  }

  // Actualizar configuraciones
  updateSettings(nuevaConfig: Partial<Configuracion>): void {
    this.config = { ...this.config, ...nuevaConfig };
    console.log('Configuraciones actualizadas:', this.config);
    
    // En la Actividad 3, aquí guardaríamos en Preferences
  }

  canDeleteFromHome(): boolean {
    return this.config.sePuedeEliminar;
  }
}
