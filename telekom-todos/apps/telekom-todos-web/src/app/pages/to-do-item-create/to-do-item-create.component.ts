import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoItem } from '@telekom-todos/domain';
import { TodoitemsService } from '../../services/todoitems.service';

@Component({
  selector: 'telekom-todos-to-do-item-create',
  templateUrl: './to-do-item-create.component.html',
  styleUrls: ['./to-do-item-create.component.css'],
})
export class ToDoItemCreateComponent implements OnInit {
  myFormGroup: FormGroup;

  item: ToDoItem = {
    id: '1',
    title: 'Hallo item',
    description: 'das ist meine Description',
  };
  constructor(
    private fb: FormBuilder,
    private todoItemsService: TodoitemsService
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
    this.todoItemsService.save(this.myFormGroup.value);
  }
  stringify(obj: any) {
    return JSON.stringify(obj);
  }
}
