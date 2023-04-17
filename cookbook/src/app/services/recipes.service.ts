import { Injectable } from '@angular/core';

export interface Recipe {
  id: number
  name: string
}

const testRecipes = [
  {
    id: 100,
    name: 'Schnitzel mit Pommes'
  },
  {
    id: 101,
    name: 'Knödel mit Kraut'
  },
]

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  getAll(): Recipe[] {
    return testRecipes
  }

  getById(id: number): Recipe | undefined {
    return testRecipes.find(recipe => recipe.id === id)
  }
}
