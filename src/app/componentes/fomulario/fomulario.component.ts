import { Component, Output, EventEmitter } from '@angular/core';
import { ValidacionServicio } from 'src/app/servicios/validacion-servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.scss'],
  standalone: true,
  imports: [Output, EventEmitter],
})
export class FomularioComponent {
  @Output() citaAgregada = new EventEmitter<{texto: string, autor: string}>();

  textoCita: string = '';
  autorCita: string = '';
  enviando: boolean = false;

  errorTexto: string  = '';
  errorAutor: string  = '';

  mostrarErrores: boolean = false;

  constructor(private servicioValidacion: ValidacionServicio) {}

  validarCampos(): void {
    this.errorTexto = '';
    this.errorAutor = '';
    
    const validacionTexto = this.servicioValidacion.validarTexto(this.textoCita);
    if (!validacionTexto.valido) {
      this.errorTexto = validacionTexto.mensaje;
    }
    
    const validacionAutor = this.servicioValidacion.validarAutor(this.autorCita);
    if (!validacionAutor.valido) {
      this.errorAutor = validacionAutor.mensaje;
    }
  }

  alEnviar(): void {
    this.validarCampos();
    this.mostrarErrores = true;

    if (!this.errorTexto && !this.errorAutor) {
      this.enviando = true;
      
      const nuevaCita = {
        texto: this.textoCita.trim(),
        autor: this.autorCita.trim()
      };

      this.citaAgregada.emit(nuevaCita);
      
      this.textoCita = '';
      this.autorCita = '';
      this.mostrarErrores = false;
      this.enviando = false;
    }
  }

  alLimpiar(): void {
    this.textoCita = '';
    this.autorCita = '';
    this.errorTexto = '';
    this.errorAutor = '';
    this.mostrarErrores = false;
  }

  alCambiarTexto(): void {
    if (this.mostrarErrores) {
      this.validarCampos();
    }
  }

  alCambiarAutor(): void {
    if (this.mostrarErrores) {
      this.validarCampos();
    }
  }

  formularioValido(): boolean {
    return !this.errorTexto && !this.errorAutor && 
           this.textoCita.trim().length >= 5 && 
           this.autorCita.trim().length >= 2;
  }
}
