export interface Hero {
  id: number;
  name: string;
  sprites?: Record<string, string | null>;
}

export const mockedHeroes: Hero[] = [
  {
    id: 1,
    name: 'Superman',
  },
  {
    id: 2,
    name: 'Dynama',
  },
  {
    id: 3,
    name: 'Magma',
  },
  {
    id: 4,
    name: 'Windstorm',
  },
];
