import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialOffersComponent } from './components/special-offers/special-offers.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { NewProductPageComponent } from './pages/new-product-page/new-product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialOffersComponent,
    ProductListComponent,
    ShoppingCartPageComponent,
    HomePageComponent,
    MainNavigationComponent,
    ProductDetailsPageComponent,
    CartSummaryComponent,
    NewProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
