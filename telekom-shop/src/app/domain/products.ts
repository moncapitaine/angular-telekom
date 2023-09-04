export interface Product {
  id: string
  name: string
  description?: string
}

export const exampleProductList = [
  {
    id: '1',
    name: 'Siemens S10',
    description: 'Das tolle mit Farbdisplay'
  },
  {
    id: '2',
    name: 'Nokia 7110',
    description: 'Irgendein Knochen aus Finnland'
  },
  {
    id: '3',
    name: 'Motorola Razor',
    description: 'Das klappbare praktisch fuer die Hosentasche'
  }
]