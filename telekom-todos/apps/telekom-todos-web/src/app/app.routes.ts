import { Route } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TodoItemDetailsComponent } from './pages/todo-item-details/todo-item-details.component';
import { ToDoItemCreateComponent } from './pages/to-do-item-create/to-do-item-create.component';
export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'todos',
    component: ToDoItemCreateComponent,
  },
  {
    path: 'todos/:id',
    component: TodoItemDetailsComponent,
  },
];
