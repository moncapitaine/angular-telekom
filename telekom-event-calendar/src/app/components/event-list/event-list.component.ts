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
  constructor(private appointmentService: AppointmentService) {}

  protected loadData() {
    this.appointmentService.appointmentList$.subscribe({
      next: (data) => (this.eventData = data),
      error: (err) => {
        this.eventData = [];
        console.error(err);
      },
      complete: () => console.log('get complete'),
    });
  }

  protected getFormattedDate(date: Date) {
    return date.toLocaleDateString();
  }

  // todo: implement delete button
}
