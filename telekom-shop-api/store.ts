export interface Product {
  id: string
  name: string
  description?: string
}

let products: Product[] = [
  {
    id: '1',
    name: 'SIEMENS S10',
    description: 'Das tolle mit Farbdisplay',
  },
  {
    id: '2',
    name: 'NOKIA 7110',
    description: 'Irgendein Knochen aus Finnland'
  },
  {
    id: '3',
    name: 'MOTOROLA RAZOR',
    description: 'Das klappbare praktisch fuer die Hosentasche'
  },
]

export const deleteIndex = (index: number) => {
  products.splice(index, 1)
}

export const getList = () => products

export const addItem = (newItem: Product) => {
  products.push(newItem)
  return products
}
