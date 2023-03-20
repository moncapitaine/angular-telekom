import { Component } from '@angular/core';

@Component({
  selector: 'app-create-appointment-page',
  templateUrl: './create-appointment-page.component.html',
  styleUrls: ['./create-appointment-page.component.css'],
})
export class CreateAppointmentPageComponent {
  model: { eventName: string };

  constructor() {
    this.model = { eventName: 'Neuer Event' };
  }
  protected onSubmit() {
    console.log('submitting...', this.model);
  }
}
