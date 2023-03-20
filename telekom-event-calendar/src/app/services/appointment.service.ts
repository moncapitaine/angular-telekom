import { Injectable } from '@angular/core';
import { Appointment } from 'src/domain/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor() {}

  public getList(): Appointment[] {
    return [
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
  }
}
