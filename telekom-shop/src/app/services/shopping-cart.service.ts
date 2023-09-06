import { Injectable } from '@angular/core';
import { Product } from '../domain/products';
import { ProductService } from './product.service';
import { BehaviorSubject } from 'rxjs';

export type CartItem = Product & {amount: number}

const initialCart: CartItem[] = [    {
  id: "1",
  name: "Test Telefon",
  amount: 2
}]

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cart: CartItem[]
  private currentProduct?: Product

  public currentCart$ = new BehaviorSubject<CartItem[]>(initialCart)

  constructor(private productService: ProductService) {
    this.cart = initialCart
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

  reduceItemAmount(index: number) {
    console.log(this.cart, index)
    const item = this.cart[index]
    if (item.amount < 2) {
      this.cart.splice(index, 1)
    } else {
      item.amount = item.amount - 1
    }
    this.currentCart$.next([...this.cart])
  }
}
