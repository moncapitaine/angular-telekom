import { Component } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'tk-toh-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent {
  constructor(public heroService: HeroService) {}
}
