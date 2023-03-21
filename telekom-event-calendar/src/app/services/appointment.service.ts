import { Injectable } from '@angular/core';
import { Appointment } from 'src/domain/appointment';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {
    console.log('constructor before httpclient');

    http
      .get('https://pokeapi.co/api/v2/pokemon')
      .pipe(take(1))
      .subscribe((data) => {
        console.log('inside httpclient', data);
      });
    console.log('constructor after httpclient');
  }

  public getList(): Appointment[] {
    return appointments;
  }

  // add appointment implementieren
}
