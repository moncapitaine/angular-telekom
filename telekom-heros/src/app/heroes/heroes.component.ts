import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hero, mockedHeroes } from '../domain/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes: Hero[] | undefined;
  heroSubscription?: Subscription;

  constructor(private heroService: HeroService) {}
  ngOnDestroy(): void {
    this.heroSubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.heroSubscription = this.heroService.heros$.subscribe(
      (heros) => (this.heroes = heros)
    );
  }

  stringify = (obj: Object) => JSON.stringify(obj);
  select = (hero: Hero) => {
    this.heroService.setSelected(hero);
  };
}
