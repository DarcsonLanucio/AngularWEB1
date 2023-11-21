import {Component, Input} from '@angular/core';
import {getPokemonNumber, Pokemon,getPokemonImage} from "../../_model/Pokemon";
import {PokemonService} from "../../_services/pokemon.service";
@Component({
  selector: 'app-poke-page',
  templateUrl: './poke-page.component.html',
  styleUrls: ['./poke-page.component.css']
})
export class PokePageComponent {
  @Input()
  public pokemon!: Pokemon;
  public getPokemonNumber = getPokemonNumber;
  public getPokemonImage = getPokemonImage;

}
