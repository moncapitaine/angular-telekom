import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem, ShoppingCartService } from 'src/app/services/shopping-cart.service';

export const shoppingCartPagePath = 'warenkorb'
@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.css']
})
export class ShoppingCartPageComponent implements OnInit, OnDestroy {

  cart?: CartItem[]
  private cartSubscription?:Subscription

  constructor(protected cartService: ShoppingCartService) {

  }
  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    this.cartSubscription = this.cartService.currentCart$.subscribe(cart => this.cart = cart)
  }

  reduceItemAmount(itemIndex: number) {
    this.cartService.reduceItemAmount(itemIndex)
  }
}
