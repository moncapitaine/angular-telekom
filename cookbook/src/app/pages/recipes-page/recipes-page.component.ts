import { Component } from '@angular/core'
import { Recipe, RecipesService } from 'src/app/services/recipes.service'

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'],
})
export class RecipesPageComponent {
  recipes: Recipe[]
  constructor(private recipesService: RecipesService) {
    this.recipes = recipesService.getAll()
  }

  handleChange(event: Event) {
    // @ts-ignore
    const searchString: string = event.target.value
    if (searchString.length > 0) {
      this.recipes = this.recipesService.search(searchString)
    } else {
      this.recipes = this.recipesService.getAll()
    }
  } 
}
