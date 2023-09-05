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
  public productsFromFetch?: string

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts$().subscribe((data) => {
      this.products = data  
    })
    this.loadData()
  }

  async loadData() {
    const result = await this.productService.getProductsByFetchApi()
    this.productsFromFetch = JSON.stringify(result, null, 2)
  }

  // promise handling without async await looks similar than rxjs
  loadData2() {
    this.productService.getProductsByFetchApi().then((result) => {
      this.productsFromFetch = JSON.stringify(result, null, 2)
    })
  }
}
