import { Component } from '@angular/core'
import { Recipe, RecipesService } from 'src/app/services/recipes.service'

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'],
})
export class RecipesPageComponent {
  recipes: Recipe[]
  constructor(recipesService: RecipesService) {
    this.recipes = recipesService.getAll()
  }
}
