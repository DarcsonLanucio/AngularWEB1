import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Pokemon} from "../../_model/Pokemon";
import {PokemonService} from "../../_services/pokemon.service";


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  pokemons: Pokemon[] | undefined;


  constructor(public pokemonService: PokemonService) {
  }



}

