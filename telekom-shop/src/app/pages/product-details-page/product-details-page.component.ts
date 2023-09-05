import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from 'src/app/domain/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {

  product?: Product
  constructor(private activatedRoute: ActivatedRoute,
    private location: Location,
    private productService: ProductService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.product = this.productService.getProductById(params['id'])
    })
  }

  goBack() {
    console.log('go back...')
    this.location.back() // angular variant
    // window.history.back() // plain javascript
  }
}
