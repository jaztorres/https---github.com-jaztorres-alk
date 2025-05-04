import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-participacion',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './participacion.component.html',
  styleUrl: './participacion.component.scss'
})
export class ParticipacionComponent {

}
