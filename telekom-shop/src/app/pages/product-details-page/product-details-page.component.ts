import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from 'src/app/domain/products';
import { ProductService } from 'src/app/services/product.service';
import { Observable, delay } from 'rxjs';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css'],
})
export class ProductDetailsPageComponent implements OnInit {
  product$?: Observable<Product | undefined>;
  currentId?: string;
  constructor(
    private location: Location,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) {
    this.product$ = productService.currentProduct$.pipe(delay(1000));
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productService.setCurrentProductId(params['id']);
      this.currentId = params['id'];
    });
  }

  goBack() {
    console.log('go back...');
    this.location.back(); // angular variant
    // window.history.back() // plain javascript
  }

  buyCurrentProduct() {
    if (!this.currentId) {
      return;
    }
    this.shoppingCartService.addCurrentProductToCart();
  }
}
