import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero, mockedHeroes } from '../domain/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes: Hero[] | undefined;

  constructor(private heroService: HeroService) {}
  ngOnDestroy(): void {
    this.heroes = undefined;
  }
  ngOnInit(): void {
    this.heroes = this.heroService.getList();
  }

  stringify = (obj: Object) => JSON.stringify(obj);
  select = (hero: Hero) => {
    this.heroService.setSelected(hero);
  };
}
