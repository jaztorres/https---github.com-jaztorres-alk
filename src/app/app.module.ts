import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { HeroComponent } from "./sections/hero/hero.component";
import { MecanicaComponent } from "./sections/mecanica/mecanica.component";
import { ParticipacionComponent } from "./sections/participacion/participacion.component";
import { MemoramaComponent } from "./sections/memorama/memorama.component";
import { PremiosComponent } from "./sections/premios/premios.component";
import { GanadoresComponent } from "./sections/ganadores/ganadores.component";
import { FooterComponent } from "./layout/footer/footer.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {BubbleEffectComponent} from "./shared/bubble-effect/bubble-effect.component"


@NgModule({
    declarations: [
    

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
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
    providers:[],
    bootstrap: []
})
export class AppModule {}