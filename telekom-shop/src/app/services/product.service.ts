import { Injectable } from '@angular/core';
import { exampleProductList } from '../domain/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getAllProducts() {
    return exampleProductList
  }
}
