import { Component } from '@angular/core';
import { Appointment } from 'src/domain/appointment';

@Component({
  selector: 'app-create-appointment-page',
  templateUrl: './create-appointment-page.component.html',
  styleUrls: ['./create-appointment-page.component.css'],
})
export class CreateAppointmentPageComponent {
  model: Partial<Appointment>;

  constructor() {
    console.log(new Date());
    this.model = {
      name: 'Neuer Event',
      start: new Date(),
      description: 'Beschreibung',
    };
  }
  protected onSubmit() {
    console.log('submitting...', this.model);
  }
}
