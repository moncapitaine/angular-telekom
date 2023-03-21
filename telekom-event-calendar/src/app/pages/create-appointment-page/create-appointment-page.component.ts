import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/domain/appointment';

@Component({
  selector: 'app-create-appointment-page',
  templateUrl: './create-appointment-page.component.html',
  styleUrls: ['./create-appointment-page.component.css'],
})
export class CreateAppointmentPageComponent {
  model: Partial<Appointment>;

  constructor(private service: AppointmentService) {
    console.log(new Date());
    this.model = {
      name: 'Neuer Event',
      start: new Date(),
      description: 'Beschreibung',
    };
  }
  protected machsJetzt() {
    console.log('submitting...', this.model);
    this.service.addNew(this.model as Appointment);
    // appointmentService erweitern um ein addNew
    // appointmentService aufrufen und einen neuen Eintrag erzeugen
  }
}
