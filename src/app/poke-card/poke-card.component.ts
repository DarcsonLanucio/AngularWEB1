import {Component, Input} from '@angular/core';
import {getPokemonNumber,getPokemonImage, Pokemon} from "../../_model/Pokemon";
import {Router} from '@angular/router'

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent {
  constructor(private _router:Router) {
  }

  @Input()
  public pokemon!: Pokemon;
  public getPokemonNumber = getPokemonNumber;
  public getPokemonImage = getPokemonImage;

  onSelect(pokemon:Pokemon) {
    this._router.navigate(['/slider',pokemon.number]);
  }
}
