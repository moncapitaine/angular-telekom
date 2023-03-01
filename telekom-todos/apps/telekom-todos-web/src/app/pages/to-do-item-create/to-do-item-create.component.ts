import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToDoItem } from '@telekom-todos/domain';

@Component({
  selector: 'telekom-todos-to-do-item-create',
  templateUrl: './to-do-item-create.component.html',
  styleUrls: ['./to-do-item-create.component.css'],
})
export class ToDoItemCreateComponent implements OnInit {
  name = new FormControl('');
  item: ToDoItem = {
    id: '1',
    title: 'Hallo item',
    description: 'das ist meine Description',
  };
  constructor() {}
  ngOnInit(): void {
    this.name.valueChanges.subscribe((newValue) => console.log(newValue));
  }
  stringify(obj: any) {
    return JSON.stringify(obj);
  }
}
