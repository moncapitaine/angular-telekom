import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RecipesListComponent } from './recipes-page.component'

describe('RecipesListComponent', () => {
  let component: RecipesListComponent
  let fixture: ComponentFixture<RecipesListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesListComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(RecipesListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
