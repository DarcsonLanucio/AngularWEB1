import {Component, Input} from '@angular/core';
import {Pokemon} from "../../_model/Pokemon";

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent {
  @Input()
  public pokemon!: Pokemon;

  public colocaZero(str: string | number, size=3):string{
    let s = String(str);
    while (s.length<(size||2)){
      s='0'+ s;
    }
    return s;
  }
}
