import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Recipe, RecipesService } from 'src/app/services/recipes.service'

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'],
})
export class RecipesPageComponent {
  recipes: Recipe[]
  constructor(private router: Router, private recipesService: RecipesService) {
    this.recipes = recipesService.getAll()
  }

  handleNewClick() {
    this.router.navigateByUrl('rezepte/neu')
    // dont do: location.pathname = '/rezepte/neu'
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
