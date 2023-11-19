import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ListaPokeComponent} from './lista-poke/lista-poke.component';
import {PokeCardComponent} from './poke-card/poke-card.component';
import {SliderComponent} from "./slider/slider.component";

import {AppRoutingModule} from "./app.routing.module";
import {PokemonService} from "../_services/pokemon.service";
import {HttpClientModule} from "@angular/common/http";
import {BodyComponent} from './body/body.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPokeComponent,
    PokeCardComponent,
    BodyComponent,
    FormComponent,
    SliderComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NavbarComponent,
    AppRoutingModule
  ],
  providers: [

    PokemonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
