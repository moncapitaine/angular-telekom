import { Component } from '@angular/core';
import { Hero, mockedHeroes } from '../domain/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {}
  selectedHero: Hero | undefined; // bad

  heroes: Hero[] = this.heroService.getList();
  stringify = (obj: Object) => JSON.stringify(obj);
  select = (hero: Hero) => {
    console.log(hero);
    this.selectedHero = hero;
  };
}
