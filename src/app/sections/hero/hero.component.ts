import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BubbleEffectComponent } from "../../shared/bubble-effect/bubble-effect.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, BubbleEffectComponent],
  templateUrl: './hero.component.html',
  styleUrls: [ './hero.component.scss']
})
export class HeroComponent {

}
