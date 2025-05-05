import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BubbleEffectComponent } from "../../shared/bubble-effect/bubble-effect.component";

@Component({
  selector: 'app-premios',
  standalone: true,
  imports: [CommonModule, RouterModule, BubbleEffectComponent],
  templateUrl: './premios.component.html',
  styleUrls: ['./premios.component.scss']
})
export class PremiosComponent {
  prizes = [
    {
      imageUrl: 'assets/images/bocina.png',
      name: 'Bocina Inteligente',
      description: 'Disfruta de tu música favorita con alta calidad de sonido.'
    },
    {
      imageUrl: 'assets/images/headphones.png',
      name: 'Audífonos',
      description: 'La mejor experiencia de audio para tus momentos favoritos.'
    },
    {
      imageUrl: 'assets/images/gift-card.png',
      name: 'Tarjeta de Regalo',
      description: 'Para que compres lo que más te guste en nuestras tiendas.'
    }
  ];
}


