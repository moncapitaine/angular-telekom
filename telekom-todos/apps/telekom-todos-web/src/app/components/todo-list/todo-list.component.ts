import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '@telekom-todos/domain';
import { take } from 'rxjs';
import { TodoitemsService } from '../../services/todoitems.service';

@Component({
  selector: 'telekom-todos-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  items?: ToDoItem[];
  constructor(private todoItemService: TodoitemsService) {}
  ngOnInit(): void {
    this.todoItemService.todoItems$
      .pipe(take(1))
      .subscribe((items) => (this.items = items));
  }
}
