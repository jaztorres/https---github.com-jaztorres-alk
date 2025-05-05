import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mecanica',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './mecanica.component.html',
  styleUrls: [ './mecanica.component.scss']
})
export class MecanicaComponent {
  steps = [
    {
      letter: 'A',
      color: 'blue',
      image: 'images/registro-datos.png',
      text: 'Registra tus datos.'
    },
    {
      letter: 'B',
      color: 'purple',
      image: 'images/mec-juega.png',
      text: 'Juega, encuentra todos los pares del memorama.'
    },
    {
      letter: 'C',
      color: 'light-blue',
      image: 'images/mec-participa.png',
      text: 'Participa obten una bocina inteligente.'
    }
  ];

}
