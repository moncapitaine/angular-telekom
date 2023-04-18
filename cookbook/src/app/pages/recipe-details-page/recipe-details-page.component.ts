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
  
  constructor(route: ActivatedRoute, private router: Router, private recipesService: RecipesService, formBuilder: FormBuilder) {    
    this.queryParamsSubscription = route.queryParams.subscribe(queryParams => {
      this.editMode = Object.keys(queryParams).findIndex(param => param === 'editmode') > -1
    })
    
    const id = +route.snapshot.params['id']
    this.recipe = recipesService.getById(id)
    this.recipeFormGroup = formBuilder.group({
      id: [id],
      name: [this.recipe?.name],
      instructions: [this.recipe?.instructions]
    })
  }
  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  handleEditClick() {
    this.router.navigateByUrl(`rezepte/${this.recipeFormGroup.value.id}?editmode`)
  }
  handleSaveClick() {
    this.recipesService.save(this.recipeFormGroup.value)
    this.recipe = this.recipeFormGroup.value
    this.router.navigateByUrl(`rezepte/${this.recipeFormGroup.value.id}`)
  }
}
