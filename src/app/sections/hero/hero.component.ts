import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropletEffectComponent } from '../../shared/droplet-effect/droplet-effect.component';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: [ './hero.component.scss']
})
export class HeroComponent {

}
