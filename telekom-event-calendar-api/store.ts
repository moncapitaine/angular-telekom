export interface Appointment {
  id: string
  name: string
  start: Date
  end?: Date
  description?: string
}

export const appointments: Appointment[] = [
  {
    id: '1',
    name: 'Erstes Event aus dem Service',
    start: new Date(),
    description: 'bla bla',
  },
  {
    id: '2',
    name: 'Zweiter Event aus dem Service',
    start: new Date(2024, 11, 30),
    end: new Date(2024, 11, 31),
  },
]
