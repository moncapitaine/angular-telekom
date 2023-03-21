import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/domain/appointment';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  eventData: Appointment[] | undefined;
  constructor(appointmentService: AppointmentService) {
    appointmentService.appointmentList$.subscribe(
      (data) => (this.eventData = data)
    );
  }

  protected getFormattedDate(date: Date) {
    return date.toLocaleDateString();
  }

  // todo: implement delete button
}
