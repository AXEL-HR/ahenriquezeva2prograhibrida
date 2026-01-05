import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Frases } from 'src/app/modelo/frases';

@Component({
  selector: 'app-comp-frase',
  templateUrl: './comp-frase.component.html',
  styleUrls: ['./comp-frase.component.scss'],
  standalone: true,
  imports: [Input, Output, EventEmitter],
})
export class CompFraseComponent {

  constructor() { }

  @Input() frase!: Frases;
  @Input() botonBorrar: boolean = false;
  
  @Output() borrar = new EventEmitter<number>();

  onDelete(): void {
    if (this.frase.id) {
      this.borrar.emit(this.frase.id);
    }
  }
}
