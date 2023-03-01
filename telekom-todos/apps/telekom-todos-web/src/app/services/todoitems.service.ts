import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
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

  save(item: ToDoItem): Observable<boolean> {
    if (item.id) {
      return this.httpClient
        .put<any>(`http://localhost:3000/api/todo/${item.id}`, item, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .pipe(
          take(1),
          map((result) => {
            console.log('save result', result);
            return !!result;
          })
        );
    } else {
      return this.httpClient
        .post<any>('http://localhost:3000/api/todo', item, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .pipe(
          take(1),
          map((result) => {
            console.log('save result', result);
            return !!result;
          })
        );
    }
  }
}
