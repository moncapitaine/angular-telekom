import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from '@telekom-todos/domain';
import { switchMap, tap } from 'rxjs';
import { TodoitemsService } from '../../services/todoitems.service';

@Component({
  selector: 'telekom-todos-todo-item-details',
  templateUrl: './todo-item-details.component.html',
  styleUrls: ['./todo-item-details.component.css'],
})
export class TodoItemDetailsComponent implements OnInit {
  myFormGroup: FormGroup;
  item?: ToDoItem;
  error?: { status: number; description: string };
  constructor(
    private route: ActivatedRoute,
    private todoItemService: TodoitemsService,
    private fb: FormBuilder
  ) {
    this.myFormGroup = this.fb.group({
      id: [''],
      title: ['', { validators: [Validators.required] }],
      description: [''],
    });
  }
  ngOnInit(): void {
    this.route.params
      .pipe(
        tap(() => {
          this.item = undefined;
          this.error = undefined;
        })
      )
      .pipe(switchMap((params) => this.todoItemService.getById$(params['id'])))
      .subscribe({
        next: (data) => {
          this.item = data;

          this.myFormGroup.setValue({ description: 'none', ...data });
        },
        error: (err) => {
          console.error('fehler beim laden', err);
          this.error = { status: err.status, description: err.error };
        },
        complete: () => console.log('complete'),
      });
  }

  stringify(obj: any) {
    return JSON.stringify(obj);
  }
}
