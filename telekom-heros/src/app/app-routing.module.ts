import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailsComponent } from './heroes/hero-details/hero-details.component';
import { HeroDetailsPageComponent } from './pages/hero-details-page/hero-details-page.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: HeroListComponent,
  },
  {
    path: 'details/:id',
    component: HeroDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
