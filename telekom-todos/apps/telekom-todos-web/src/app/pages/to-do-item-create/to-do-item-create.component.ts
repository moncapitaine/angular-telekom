import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToDoItem } from '@telekom-todos/domain';

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
  constructor(private fb: FormBuilder) {
    this.myFormGroup = this.fb.group({
      title: [''],
      description: [''],
    });
  }
  ngOnInit(): void {
    this.myFormGroup.valueChanges.subscribe((newValue: ToDoItem) => {
      this.item.title = newValue.title;
      this.item.description = newValue.description;
    });
  }
  stringify(obj: any) {
    return JSON.stringify(obj);
  }
}
