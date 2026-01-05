import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.scss'],
  standalone: true,
  imports: [Output, EventEmitter],
})
export class FomularioComponent {
  @Output() agregar = new EventEmitter<{autor: string; texto: string;}>();

  formFrase: FormGroup
  seSubio: boolean = false;

  constructor(private fb: FormBuilder) { 
    this.formFrase = this.fb.group({
      autor: ['', [Validators.required, Validators.minLength(2)]],
      texto: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  get texto() { return this.formFrase.get('texto'); }
  get autor() { return this.formFrase.get('autor'); }

  onSubmit(): void {
    if (this.formFrase.valid) {
      this.seSubio = true;
  }
    const nuevaCita = {
      autor: this.formFrase.value.autor.trim(),
      texto: this.formFrase.value.texto.trim()
    };
    this.agregar.emit(nuevaCita);

    this.formFrase.reset();
    this.seSubio = false;
    }
    
    getMensajeError(campo: string): string {
    const control = this.formFrase.get(campo);
  
    if (!control || !control.errors || !control.touched) {
      return '';
    }
    if (control.errors['required']) {
      return 'Este campo es obligatorio';
    }
    if (control.errors['minlength']) {
      const requiredLength = control.errors['minlength'].requiredLength;
      return `Mínimo ${requiredLength} caracteres`;
    }
    return 'Campo inválido';
  
  }
}
