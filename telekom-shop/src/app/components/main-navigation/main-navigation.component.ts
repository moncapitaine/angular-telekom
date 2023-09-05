import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { shoppingCartPagePath } from 'src/app/pages/shopping-cart-page/shopping-cart-page.component';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent {

  constructor(private router: Router) {}

  protected pay() {
    this.router.navigateByUrl(shoppingCartPagePath)
  }
}
