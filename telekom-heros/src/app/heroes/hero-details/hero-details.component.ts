import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hero } from 'src/app/domain/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'tk-toh-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit, OnDestroy {
  selectedHeroSubscription?: Subscription;
  hero: Hero | undefined;
  constructor(public heroService: HeroService) {}
  ngOnInit(): void {
    this.selectedHeroSubscription = this.heroService.selectedHero$.subscribe(
      (hero) => {
        this.hero = hero ?? undefined;
      }
    );
  }
  ngOnDestroy(): void {
    this.selectedHeroSubscription?.unsubscribe();
  }
}
