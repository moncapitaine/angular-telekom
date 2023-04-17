import { Component } from '@angular/core'


interface Recipe {
  id: number
  name: string
}

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'],
})
export class RecipesPageComponent {
  recipes: Recipe[]
  constructor() {
    this.recipes = [
      {
        id: 100,
        name: 'Schnitzel mit Pommes'
      },
      {
        id: 101,
        name: 'Knödel mit Kraut'
      },
      
    ]
  }
}
