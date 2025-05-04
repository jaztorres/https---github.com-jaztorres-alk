import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './sections/hero/hero.component';
import { MecanicaComponent } from './sections/mecanica/mecanica.component';
import { ParticipacionComponent } from './sections/participacion/participacion.component';
import { MemoramaComponent } from './sections/memorama/memorama.component';
import { PremiosComponent } from './sections/premios/premios.component';
import { GanadoresComponent } from './sections/ganadores/ganadores.component';


const routes: Routes = [
  { path: '', component: HeroComponent }, // Ruta inicial (Hero)

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