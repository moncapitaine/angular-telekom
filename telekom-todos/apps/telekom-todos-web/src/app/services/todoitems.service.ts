import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItem } from '@telekom-todos/domain';

@Injectable({
  providedIn: 'root',
})
export class TodoitemsService {
  todoItems$: Observable<ToDoItem[]>;
  constructor(private httpClient: HttpClient) {
    this.todoItems$ = this.httpClient.get<ToDoItem[]>(
      'http://localhost:3000/api/todo'
    );
  }

  getById$(id: string) {
    return this.httpClient.get<ToDoItem>(
      `http://localhost:3000/api/todo/${id}`
    );
  }

  save(item: ToDoItem) {
    console.log('saving', item);
    this.httpClient
      .post<any>('http://localhost:3000/api/todo', item, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe((result) => console.log(result));
  }
}
