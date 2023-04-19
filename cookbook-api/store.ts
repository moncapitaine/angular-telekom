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

let recipes: Recipe[] = [
  {
    id: 1,
    name: 'Erstes Event aus dem Service',
    instructions: 'bla bla',
  },
  {
    id: 2,
    name: 'Zweiter Event aus dem Service',
  },
]

export const deleteIndex = (index: number) => {
  recipes.splice(index, 1)
}

export const getList = () => recipes

export const addItem = (newItem: Recipe) => {
  recipes.push(newItem)
  return recipes
}
