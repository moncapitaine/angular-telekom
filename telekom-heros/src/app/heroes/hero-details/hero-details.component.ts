import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/domain/hero';

@Component({
  selector: 'tk-toh-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent {
  @Input() hero: Hero | undefined;
}
