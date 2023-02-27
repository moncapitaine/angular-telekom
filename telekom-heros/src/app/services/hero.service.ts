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
  }

  public getSelected() {
    return this.selectedHero;
  }
}
