import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hero } from 'src/app/domain/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'tk-toh-hero-details-page',
  templateUrl: './hero-details-page.component.html',
  styleUrls: ['./hero-details-page.component.scss'],
})
export class HeroDetailsPageComponent implements OnInit, OnDestroy {
  paramsSubscription?: Subscription;
  hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(
      (params) => (this.hero = this.heroService.getHeroById(params['id']))
    );
  }
}
