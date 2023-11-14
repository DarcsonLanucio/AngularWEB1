import {Component, Input} from '@angular/core';
import {getPokemonNumber,getPokemonImage, Pokemon} from "../../_model/Pokemon";

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent {
  @Input()
  public pokemon!: Pokemon;
  public getPokemonNumber = getPokemonNumber;
  public getPokemonImage = getPokemonImage;

}
