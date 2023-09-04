import { Component } from '@angular/core';
import { Product, exampleProductList } from 'src/app/domain/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  public products: Product[]

  constructor() {
    this.products = exampleProductList
  }
}
