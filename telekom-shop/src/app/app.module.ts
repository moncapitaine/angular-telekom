import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialOffersComponent } from './components/special-offers/special-offers.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SpecialOffersComponent,
    ProductListComponent,
    ShoppingCartPageComponent,
    HomePageComponent,
    MainNavigationComponent,
    ProductDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
