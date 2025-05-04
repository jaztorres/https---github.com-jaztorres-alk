import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { HeroComponent } from "./sections/hero/hero.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GanadoresComponent } from "./sections/ganadores/ganadores.component";
import { MecanicaComponent } from "./sections/mecanica/mecanica.component";
import { MemoramaComponent } from "./sections/memorama/memorama.component";
import { ParticipacionComponent } from "./sections/participacion/participacion.component";
import { PremiosComponent } from "./sections/premios/premios.component";
import { FooterComponent } from "./layout/footer/footer.component";
import {BubbleEffectComponent} from "./shared/bubble-effect/bubble-effect.component"


@NgModule({
    declarations: [
       




    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FooterComponent,
        GanadoresComponent,
        HeroComponent,
        MecanicaComponent,
        MemoramaComponent, 
        ParticipacionComponent,
        PremiosComponent,
        HeaderComponent,
        BubbleEffectComponent,
        

    ],
    bootstrap: []
})
export class AppModule {}