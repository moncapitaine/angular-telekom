import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/domain/appointment';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit, OnDestroy {
  @Input('backgroundColor')
  backgroundColor?: string;

  eventData: Appointment[] | undefined;
  appointmentListSubscription?: Subscription;
  constructor(protected appointmentService: AppointmentService) {}

  ngOnDestroy(): void {
    // nur notwendig, wenn eine subscription offen bleibt, bei pipe(take(1)) oder einem http get ist das nicht unbedingt notwendig
    this.appointmentListSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.appointmentListSubscription =
      this.appointmentService.appointmentList$.subscribe({
        next: (data) => (this.eventData = data),
        error: (err) => {
          this.eventData = [];
          console.error(err);
        },
        complete: () => console.log('get complete'),
      });
  }

  protected handleDelete(id: string) {
    this.appointmentService.delete(id);
  }

  protected getFormattedDate(date: Date) {
    return date.toLocaleDateString();
  }

  // todo: implement delete button
}
