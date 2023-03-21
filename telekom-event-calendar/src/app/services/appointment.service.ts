import { Injectable } from '@angular/core';
import { Appointment } from 'src/domain/appointment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

interface AppointmentApiItem {
  id: string;
  name: string;
  start: string;
  end?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  public appointmentList$: Observable<Appointment[]>;

  constructor(private http: HttpClient) {
    this.appointmentList$ = http
      .get<AppointmentApiItem[]>('http://localhost:4000/appointments')
      .pipe(
        catchError((err) => {
          console.error(err);
          return of<AppointmentApiItem[]>([
            {
              id: '',
              name: 'Fehler beim Landen aus dem Service',
              start: new Date().toISOString(),
              description: err.message,
            },
          ]);
        }),
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
  public addNew(newItem: Appointment) {
    this.http
      .post('http://localhost:4000/appointments', newItem, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .subscribe((result) => console.log(result));
  }

  public delete(id: string) {
    this.http
      .delete(`http://localhost:4000/appointments/${id}`)
      .subscribe((data) => console.log('deleted', data));
  }
}
