import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/domain/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {

  product?: Product
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {}
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.product = this.productService.getProductById(id)
  }


}
