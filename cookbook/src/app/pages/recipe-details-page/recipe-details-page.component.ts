import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe, RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css']
})
export class RecipeDetailsPageComponent implements OnDestroy {
  editMode = false
  recipe: Recipe | undefined
  recipeFormGroup: FormGroup
  queryParamsSubscription: Subscription
  paramsSubscription: Subscription
  
  constructor(route: ActivatedRoute, private router: Router, private recipesService: RecipesService, formBuilder: FormBuilder) {    
    this.recipeFormGroup = formBuilder.group({
      id: [''],
      name: [''],
      instructions: ['']
    })

    this.queryParamsSubscription = route.queryParams.subscribe(queryParams => {
      this.editMode = Object.keys(queryParams).findIndex(param => param === 'editmode') > -1
    })
    this.paramsSubscription = route.params.subscribe(params => {
      const id = +params['id']
      this.recipe = recipesService.getById(id)
      this.recipeFormGroup.patchValue(this.recipe || {})
    })
    

  }
  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
    this.paramsSubscription.unsubscribe()
  }

  handleEditClick() {
    this.router.navigateByUrl(`rezepte/${this.recipeFormGroup.value.id}?editmode`)
  }
  handleSaveClick() {
    this.recipesService.save(this.recipeFormGroup.value)
    this.recipe = this.recipeFormGroup.value
    this.router.navigateByUrl(`rezepte/${this.recipeFormGroup.value.id}`)
  }
  handleNext() {
    if (this.recipe) {
      const nextId = this.recipesService.nextId(this.recipe)
      this.router.navigateByUrl(`rezepte/${nextId}`)
    }
  }
}
