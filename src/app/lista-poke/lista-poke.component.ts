import {Component} from '@angular/core';
import {Pokemon} from "../../_model/Pokemon";
import {Types} from "../../_model/Types";
import {PokemonService} from "../../_services/pokemon.service";

@Component({
  selector: 'app-lista-poke',
  templateUrl: './lista-poke.component.html',
  styleUrls: ['./lista-poke.component.css']
})
export class ListaPokeComponent {
  constructor(
    public pokemonService: PokemonService,
  ) {
  }

}

