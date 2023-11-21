import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Pokemon} from "../../_model/Pokemon";
import {PokemonService} from "../../_services/pokemon.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{
  pokemons: Pokemon[] | undefined;


  constructor(public pokemonService: PokemonService, private _router:ActivatedRoute) {
  }

  public pokemonNumber: number | undefined;

  ngOnInit(){
    this.pokemonNumber = parseInt(<string>this._router.snapshot.paramMap.get('id'))
}

}

