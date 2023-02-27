import { Injectable } from '@angular/core';
import { mockedHeroes } from '../domain/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  public getList() {
    return mockedHeroes;
  }
}
