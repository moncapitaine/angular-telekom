import { Injectable } from '@angular/core';
import { Appointment } from 'src/domain/appointment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  public appointmentList$: Observable<Appointment[]>;

  constructor(http: HttpClient) {
    this.appointmentList$ = http
      .get<
        {
          id: string;
          name: string;
          start: string;
          end?: string;
          description?: string;
        }[]
      >('http://localhost:4000/appointments')
      .pipe(
        map((apiList) =>
          apiList.map((apiItem) => ({
            id: apiItem.id,
            name: apiItem.name,
            start: new Date(apiItem.start),
            end: apiItem.end ? new Date(apiItem.end) : undefined,
            description: apiItem.description,
          }))
        )
      );
  }
}
