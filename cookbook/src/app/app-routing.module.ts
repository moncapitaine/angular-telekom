import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router' // CLI imports router
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ImpressPageComponent } from './pages/impress-page/impress-page.component'
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component'
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component'

const routes: Routes = [
  {
    path: 'rezepte',
    component: RecipesPageComponent,
  },
  {
    path: 'impressum',
    component: ImpressPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
  // {}
] // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
