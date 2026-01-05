import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Frases } from 'src/app/modelo/frases';
import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonFooter} from '@ionic/angular/standalone';

@Component({
  selector: 'app-comp-frase',
  templateUrl: './comp-frase.component.html',
  styleUrls: ['./comp-frase.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonButton, IonFooter],
})
export class CompFraseComponent {

  constructor() { }

  @Input() frase!: Frases;
  @Input() botonBorrar: boolean = false;
  
  @Output() borrar = new EventEmitter<number>();

  alEliminar(): void {
    if (this.frase.id) {
      this.borrar.emit(this.frase.id);
    }
  }
}
