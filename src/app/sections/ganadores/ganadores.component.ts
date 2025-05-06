import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Winner {
  name: string;
  prize: string;
  date: string;
}

@Component({
  selector: 'app-ganadores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ganadores.component.html',
  styleUrl: './ganadores.component.scss'
})
export class GanadoresComponent {
 // Lista de ganadores (ejemplo)
 winners: Winner[] = [
  { name: 'Juan Pérez', prize: 'Bocina Inteligente', date: '15/04/2025' },
  { name: 'María González', prize: 'Audífonos', date: '12/04/2025' },
  { name: 'Carlos Rodríguez', prize: 'Tarjeta de Regalo', date: '10/04/2025' },
  { name: 'Ana López', prize: 'Bocina Inteligente', date: '08/04/2025' },
  { name: 'Roberto Sánchez', prize: 'Audífonos', date: '05/04/2025' }
];
}

