import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h2>Geht auch...</h2>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'telekom-event-calendar';
  constructor(private router: Router) {}

  protected createAppointment() {
    this.router.navigateByUrl('/neu');
  }
}
