import { Injectable } from '@angular/core';
import { Appointment } from 'src/domain/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointments = [
    {
      name: 'Erstes Event aus dem Service',
      start: new Date(),
      description: 'bla bla',
    },
    {
      name: 'Zweiter Event aus dem Service',
      start: new Date(2024, 11, 30),
      end: new Date(2024, 11, 31),
    },
  ];
  constructor() {}

  public getList(): Appointment[] {
    return this.appointments;
  }

  // add appointment implementieren
}
