import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe, RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css']
})
export class RecipeDetailsPageComponent {
  editMode = false
  recipe: Recipe | undefined
  recipeFormGroup: FormGroup
  
  constructor(route: ActivatedRoute, private recipesService: RecipesService, formBuilder: FormBuilder) {
    const id = +route.snapshot.params['id']
    this.recipe = recipesService.getById(id)
    this.recipeFormGroup = formBuilder.group({
      id: [id],
      name: [this.recipe?.name],
      instructions: [this.recipe?.instructions]
    })
  }

  handleEditClick() {
    this.editMode = true
  }
  handleSaveClick() {
    this.editMode = false
    this.recipesService.save(this.recipeFormGroup.value)
  }
}
