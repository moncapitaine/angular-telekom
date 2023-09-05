import { Injectable } from '@angular/core';
import { Product } from '../domain/products';
import { ProductService } from './product.service';
import { BehaviorSubject } from 'rxjs';

export type CartItem = Product & {amount: number}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cart: CartItem[]
  private currentProduct?: Product

  public currentCart$ = new BehaviorSubject<CartItem[]>([])

  constructor(private productService: ProductService) {
    this.cart = []
    this.productService.currentProduct$.subscribe(product => {
      this.currentProduct = product
    })
   }

  addCurrentProductToCart() {
    if (!this.currentProduct) {
      return
    }
    // @ts-ignore
    const foundIndex = this.cart.findIndex(item => item.id === this.currentProduct.id)
    if (foundIndex > -1) {
      this.cart[foundIndex].amount = this.cart[foundIndex].amount + 1
    } else {
      this.cart.push({...this.currentProduct, amount: 1})
    }
    this.currentCart$.next([...this.cart])
  }
}
