import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe, RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css']
})
export class RecipeDetailsPageComponent {
  recipe: Recipe | undefined
  constructor(route: ActivatedRoute, recipesService: RecipesService) {
    const id = +route.snapshot.params['id']
    this.recipe = recipesService.getById(id)
  }
}
