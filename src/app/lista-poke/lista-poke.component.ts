import {Component} from '@angular/core';
import {Pokemon} from "../../_model/Pokemon";
import {Types} from "../../_model/Types";

@Component({
  selector: 'app-lista-poke',
  templateUrl: './lista-poke.component.html',
  styleUrls: ['./lista-poke.component.css']
})
export class ListaPokeComponent {
  public pokemons: Pokemon[] = [{
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    number: 1,
    name: 'Bulbasour',
    types: [
      Types.grass,
      Types.poison
    ]
  },{
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
    number: 2,
    name: 'Ivysaur',
    types: [
      Types.grass,
      Types.poison
    ]
  },{
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
    number: 3,
    name: 'Venosaur',
    types: [
      Types.grass,
      Types.poison
    ]
  },{
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
    number: 4,
    name: 'Venosaur',
    types: [
      Types.fire
    ]
  },];


}

