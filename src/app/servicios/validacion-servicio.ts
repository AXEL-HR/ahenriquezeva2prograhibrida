import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidacionServicio {
  validarTexto(texto: string): { valido: boolean; mensaje: string } {
    if (!texto || texto.trim().length === 0) {
      return { valido: false, mensaje: 'La frase es obligatoria' };
    }
    
    if (texto.trim().length < 5) {
      return { valido: false, mensaje: 'La frase debe tener al menos 5 caracteres' };
    }
    
    return { valido: true, mensaje: '' };
  }

  validarAutor(autor: string): { valido: boolean; mensaje: string } {
    if (!autor || autor.trim().length === 0) {
      return { valido: false, mensaje: 'El autor es obligatorio' };
    }
    
    if (autor.trim().length < 2) {
      return { valido: false, mensaje: 'El autor debe tener al menos 2 caracteres' };
    }
    
    return { valido: true, mensaje: '' };
  }

  validarFormulario(texto: string, autor: string): { 
    valido: boolean; 
    errores: string[] 
  } {
    const errores: string[] = [];
    
    const validacionTexto = this.validarTexto(texto);
    if (!validacionTexto.valido) {
      errores.push(validacionTexto.mensaje);
    }
    
    const validacionAutor = this.validarAutor(autor);
    if (!validacionAutor.valido) {
      errores.push(validacionAutor.mensaje);
    }
    
    return {
      valido: errores.length === 0,
      errores
    };
  }
}