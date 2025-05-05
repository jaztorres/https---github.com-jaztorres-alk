import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { HeroComponent } from "./sections/hero/hero.component";
import { MecanicaComponent } from "./sections/mecanica/mecanica.component";
import { ParticipacionComponent } from './sections/participacion/participacion.component';
import { PremiosComponent } from "./sections/premios/premios.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, HeroComponent, MecanicaComponent, ParticipacionComponent, PremiosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alk-def- 1';
}
