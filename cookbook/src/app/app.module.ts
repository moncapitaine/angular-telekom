import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MichaelComponent } from './components/michael/michael.component'
import { PersonComponent } from './components/person/person.component'
import { DeleteButtonComponent } from './components/delete-button/delete-button.component'
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ImpressPageComponent } from './pages/impress-page/impress-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component'

@NgModule({
  declarations: [
    AppComponent,
    MichaelComponent,
    PersonComponent,
    DeleteButtonComponent,
    HomePageComponent,
    ImpressPageComponent,
    NotFoundPageComponent,
    MainNavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
