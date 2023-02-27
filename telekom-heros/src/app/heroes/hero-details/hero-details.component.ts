import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/domain/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'tk-toh-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.hero = this.heroService.getSelected();
  }
  hero: Hero | undefined;
}
