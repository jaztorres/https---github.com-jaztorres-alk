import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './sections/hero/hero.component';

import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alk-def';
}
