import { Component } from '@angular/core';
import { Appointment } from 'src/domain/appointment';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  eventData: Appointment[] = [
    {
      name: 'Event A',
      start: new Date(2023, 3, 1),
      description: 'Tolles Date',
    },
    {
      name: 'Event B',
      start: new Date(2023, 3, 2),
      end: new Date(2023, 3, 5),
    },
    {
      name: 'Event C',
      start: new Date(2023, 3, 3),
    },
  ];

  protected getFormattedDate(date: Date) {
    return date.toLocaleDateString();
  }
}
