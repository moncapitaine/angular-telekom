import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from 'src/app/domain/products';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css'],
})
export class ProductDetailsPageComponent implements OnInit {
  product$?: Observable<Product | undefined>;
  constructor(
    private location: Location,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.product$ = productService.currentProduct$;
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.setCurrentProductId(params['id'])
    })
  }

  goBack() {
    console.log('go back...');
    this.location.back(); // angular variant
    // window.history.back() // plain javascript
  }
}
