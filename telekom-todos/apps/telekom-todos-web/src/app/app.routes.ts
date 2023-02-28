import { Route } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TodoItemDetailsComponent } from './pages/todo-item-details/todo-item-details.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'details/:id',
    component: TodoItemDetailsComponent,
  },
];
