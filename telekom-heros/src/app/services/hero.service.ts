import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Hero, mockedHeroes } from '../domain/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private httpClient: HttpClient) {
    this.heros$ = this.httpClient
      .get<{ results: { name: string; url: string }[] }>(
        'https://pokeapi.co/api/v2/pokemon'
      )
      .pipe(
        map((apiResponse) =>
          apiResponse.results.map((pokemon, index) => ({
            id: index,
            name: pokemon.name,
          }))
        )
      );
  }

  selectedHero$ = new BehaviorSubject<Hero | null>(null);
  heros$: Observable<Hero[]>;

  public setSelected(hero: Hero) {
    this.selectedHero$.next(hero);
  }

  public getHeroById(id: string) {
    return mockedHeroes.find((hero) => hero.id.toString() === id);
  }

  // public getSelected() {
  //   console.log('getSelected', this.selectedHero);

  //   return this.selectedHero;
  // }
}
