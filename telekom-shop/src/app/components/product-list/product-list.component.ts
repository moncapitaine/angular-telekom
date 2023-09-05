import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products?: Product[]

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProductsRohrpost().subscribe((data) => {
      this.products = data  
    })
  }
}
