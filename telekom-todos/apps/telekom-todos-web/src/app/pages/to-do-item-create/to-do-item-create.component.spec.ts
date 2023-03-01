import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoItemCreateComponent } from './to-do-item-create.component';

describe('ToDoItemCreateComponent', () => {
  let component: ToDoItemCreateComponent;
  let fixture: ComponentFixture<ToDoItemCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoItemCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
