import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomePageComponent } from './home-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomePageComponent, TodoListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('scale-button');
    expect(button?.textContent).toContain(
      'Hier können Sie ein neues Todo anlegen'
    );
  });
});
