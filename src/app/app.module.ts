import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaPokeComponent } from './lista-poke/lista-poke.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import {PokemonService} from "../_services/pokemon.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListaPokeComponent,
    PokeCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
  ],
  providers: [

    PokemonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
