import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../_model/Pokemon";
import {from, map, mergeMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemons: Pokemon[] = [];
  constructor(
    private httpClient: HttpClient,
  ) {
    const allPokemonsUrl = ' https://pokeapi.co/api/v2/pokemon/?limit=151';
    // @ts-ignore
    this.httpClient.get<any>(allPokemonsUrl).pipe(
      map(value => value.results),
      map((value: any) =>{
        return from(value).pipe(
          mergeMap((v:any) => this.httpClient.get(v.url))
        )
      }),
      mergeMap(value => value),
    ).subscribe((result: any)=> {
      this.pokemons[result.id-1] = {
        number: result.id,
        name: result.name,
        image: result.sprites.front_default,
        altura: result.height,
        peso: result.weight,
        ability: result.abilities[0].ability.name,
        types: result.types.map((t: any) => t.type.name),
      };
    });
  }
}
