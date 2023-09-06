import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartPageComponent, shoppingCartPagePath } from './pages/shopping-cart-page/shopping-cart-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { NewProductPageComponent } from './pages/new-product-page/new-product-page.component';

const routes: Routes = [
  {
    path: shoppingCartPagePath,
    component: ShoppingCartPageComponent
  },
  {
    path: 'product/new',
    component: NewProductPageComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsPageComponent
  },
  {
    path: '**',
    component: HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppRoutingModule { }
