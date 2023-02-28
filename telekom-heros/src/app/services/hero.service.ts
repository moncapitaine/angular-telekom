import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, take } from 'rxjs';
import { Hero } from '../domain/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private httpClient: HttpClient) {
    this.heros$ = this.httpClient
      .get<{ results: { name: string; url: string }[]; error: string }>(
        'https://pokeapi.co/api/v2/pokemon'
      )
      .pipe(
        catchError((err) => {
          console.error(err);
          return of({ results: [], error: err?.message ?? err.toString() });
        })
      )
      .pipe(
        map((apiResponse) => {
          return apiResponse.results.map((pokemon, index) => ({
            id: index + 1,
            name: pokemon.name,
          }));
        })
      );
  }

  selectedHero$ = new BehaviorSubject<Hero | null>(null);
  heros$: Observable<Hero[]>;

  public setSelected(hero: Hero) {
    this.selectedHero$.next(hero);
  }

  public getHeroById$(id: number): Observable<Hero> {
    return this.httpClient
      .get<{
        name: string;
        sprites: Record<string, string | null>;
      }>(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .pipe(
        map((apiResponse) => ({
          id,
          name: apiResponse.name,
          sprites: apiResponse.sprites,
        }))
      );
  }

  // public getSelected() {
  //   console.log('getSelected', this.selectedHero);

  //   return this.selectedHero;
  // }
}
