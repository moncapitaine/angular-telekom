import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoitemsService } from './todoitems.service';

describe('TodoitemsService', () => {
  let service: TodoitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TodoitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
