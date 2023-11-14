import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ListaPokeComponent} from './lista-poke/lista-poke.component';
import {PokeCardComponent} from './poke-card/poke-card.component';
import {PokemonService} from "../_services/pokemon.service";
import {HttpClientModule} from "@angular/common/http";
import {BodyComponent} from './body/body.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListaPokeComponent,
    PokeCardComponent,
    BodyComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NavbarComponent
  ],
  providers: [

    PokemonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
