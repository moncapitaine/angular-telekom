import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  itemCount: number = 0
  productCount: number = 0

  constructor(private cartService: ShoppingCartService) {

  }
  ngOnInit(): void {
    this.cartService.currentCart$.subscribe(cart => {
      this.itemCount = cart.map(item => item.amount).reduce((prev, curr) => prev + curr)
      this.productCount = cart.length
    })
  }

  
}
