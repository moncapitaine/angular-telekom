import { Injectable } from '@angular/core';

export interface Ingredient {
  name: string
  amount?: string
}

export interface Recipe {
  id: number
  name: string
  instructions?: string
  ingredients?: Ingredient[]
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

  search(test: string): Recipe[] {
    return testRecipes.filter(recipe => recipe.name.toLowerCase().includes(test.toLowerCase()))
  }

  add(recipe: Omit<Recipe, 'id'>) {
    // todo: maximum von id aus dem array plus 1
    testRecipes.push({...recipe, id: 1000})
  }

  save(changedRecipe: Recipe) {
    const foundIndex = testRecipes.findIndex(recipe => recipe.id === changedRecipe.id)
    if (foundIndex < 0) {
      console.error('cannot save recipe', changedRecipe)
      return
    }
    testRecipes[foundIndex] = changedRecipe
  }
  nextId(recipe: Recipe) {
    const foundIndex = testRecipes.findIndex(r => r.id === recipe.id)
    if(foundIndex < testRecipes.length-1) {
      return testRecipes[foundIndex + 1].id
    }
    return testRecipes[0].id
  }
}
