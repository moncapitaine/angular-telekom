import { Component } from '@angular/core';
import { Product } from 'src/app/domain/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  public products: Product[]

  constructor(productService: ProductService) {
    this.products = productService.getAllProducts()
  }
}
