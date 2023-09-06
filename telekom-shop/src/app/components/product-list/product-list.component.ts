import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/domain/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public products?: Product[]
  public productsFromFetch?: string

  private productListSubscription?: Subscription

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productListSubscription = this.productService.productList$.subscribe((productList) => {
      this.products = productList
    })
  }

  ngOnDestroy(): void {
    this.productListSubscription?.unsubscribe()
  }

  // async loadData() {
  //   const result = await this.productService.getProductsByFetchApi()
  //   this.productsFromFetch = JSON.stringify(result, null, 2)
  // }

  // // promise handling without async await looks similar than rxjs
  // loadData2() {
  //   this.productService.getProductsByFetchApi().then((result) => {
  //     this.productsFromFetch = JSON.stringify(result, null, 2)
  //   })
  // }
}
