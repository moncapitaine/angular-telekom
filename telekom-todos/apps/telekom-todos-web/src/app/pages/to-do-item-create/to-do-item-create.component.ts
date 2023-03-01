import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToDoItem } from '@telekom-todos/domain';
import { TodoitemsService } from '../../services/todoitems.service';

@Component({
  selector: 'telekom-todos-to-do-item-create',
  templateUrl: './to-do-item-create.component.html',
  styleUrls: ['./to-do-item-create.component.css'],
})
export class ToDoItemCreateComponent implements OnInit {
  myFormGroup: FormGroup;
  error?: { status: number; description: string };

  item: ToDoItem = {
    id: '1',
    title: 'Hallo item',
    description: 'das ist meine Description',
  };
  constructor(
    private fb: FormBuilder,
    private todoItemsService: TodoitemsService,
    private router: Router
  ) {
    this.myFormGroup = this.fb.group({
      title: [
        '',
        { validators: [Validators.required, Validators.maxLength(3)] },
      ],
      description: [''],
    });
  }
  ngOnInit(): void {
    this.myFormGroup.valueChanges.subscribe((newValue: ToDoItem) => {
      this.item.title = newValue.title;
      this.item.description = newValue.description;
    });
  }
  onSubmit() {
    console.log('submitting', this.myFormGroup.value);
    this.error = undefined;
    this.todoItemsService.save(this.myFormGroup.value).subscribe({
      next: (result) => {
        this.router.navigateByUrl('/');
        console.log('saved success', result);
      },
      error: (err) => {
        console.error('save error', err);
        this.error = { status: err.status, description: err.error };
      },
      complete: () => console.log('save complete'),
    });
  }
  stringify(obj: any) {
    return JSON.stringify(obj);
  }
}
