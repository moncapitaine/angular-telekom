import { Injectable } from '@angular/core';
import { Hero, mockedHeroes } from '../domain/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  private selectedHero?: Hero;

  public getList() {
    return mockedHeroes;
  }

  public setSelected(hero: Hero) {
    this.selectedHero = hero;
    console.log('setSelected', hero);
  }

  public getSelected() {
    console.log('getSelected', this.selectedHero);

    return this.selectedHero;
  }
}
