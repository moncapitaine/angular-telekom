import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/domain/appointment';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  eventData: Appointment[];
  constructor(appointmentService: AppointmentService) {
    this.eventData = appointmentService.getList();
  }

  protected getFormattedDate(date: Date) {
    return date.toLocaleDateString();
  }
}
