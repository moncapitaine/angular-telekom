import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, switchMap, take, tap } from 'rxjs';
import { Hero } from 'src/app/domain/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'tk-toh-hero-details-page',
  templateUrl: './hero-details-page.component.html',
  styleUrls: ['./hero-details-page.component.scss'],
})
export class HeroDetailsPageComponent implements OnInit, OnDestroy {
  hero?: Hero;
  combinedSubscription?: Subscription;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}
  ngOnDestroy(): void {
    console.log(this.combinedSubscription);
    this.combinedSubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.combinedSubscription = this.route.params
      .pipe(tap((params) => console.log(params)))
      .pipe(switchMap((params) => this.heroService.getHeroById$(params['id'])))
      .pipe(take(1))
      .subscribe({
        next: (hero) => {
          this.hero = hero;
        },
        error: (err) => console.error(err),
        complete: () => console.log('final'),
      });
  }

  stringify(obj: object | undefined): string {
    return JSON.stringify(obj);
  }
}
