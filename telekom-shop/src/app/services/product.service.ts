import { Injectable } from '@angular/core';
import { Product, exampleProductList } from '../domain/products';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  public getAllProductsRohrpost() {
    return of(exampleProductList)
      .pipe(tap((data) => console.log('daten vor dem Delay erkannt', data)))
      .pipe(delay(2000))
      .pipe(tap((data) => console.log('daten nach dem Delay erkannt', data)));
  }
}
