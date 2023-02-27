import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero, mockedHeroes } from '../domain/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  selectedHero$ = new BehaviorSubject<Hero | null>(null);

  public getList() {
    return mockedHeroes;
  }

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
