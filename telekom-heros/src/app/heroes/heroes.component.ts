import { Component } from '@angular/core';
import { Hero, mockedHeroes } from '../domain/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  selectedHero: Hero | undefined; // bad

  heroes: Hero[] = [...mockedHeroes];
  stringify = (obj: Object) => JSON.stringify(obj);
  select = (hero: Hero) => {
    console.log(hero);
    this.selectedHero = hero;
  };
}
