import {Types} from "./Types";

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  altura: number;
  peso: number;
  ability: string;
  types: Types[];
}
export function getPokemonImage(pokemon:Pokemon):string{
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPokemonNumber(pokemon)}.png`;
}
export function getPokemonNumber(pokemon: Pokemon):string{
  return colocaZero(pokemon.number);
}
function colocaZero(str: string | number, size=3):string{
  let s = String(str);
  while (s.length<(size||2)){
    s='0'+ s;
  }
  return s;
}
export function getPesoeAltura(a:number):number{
  return (a/10);
}
