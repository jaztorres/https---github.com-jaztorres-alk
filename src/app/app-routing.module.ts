import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { MecanicaComponent } from './sections/mecanica/mecanica.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MemoramaComponent } from './sections/memorama/memorama.component';
import { ParticipacionComponent } from './sections/participacion/participacion.component';
import { GanadoresComponent } from './sections/ganadores/ganadores.component';
import { PremiosComponent } from './sections/premios/premios.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'mecanica', component: MecanicaComponent },
  { path: 'memorama', component: MemoramaComponent },
  { path: 'participacion', component: ParticipacionComponent },
  { path: 'ganadores', component: GanadoresComponent },
  { path: 'premios', component:PremiosComponent},
  
  //seccionHome
  { path: '**', pathMatch: 'full', redirectTo: 'hero' },
  { path: '', pathMatch: 'full', redirectTo:'hero' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes,{
    onSameUrlNavigation: "ignore",
    anchorScrolling:'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }