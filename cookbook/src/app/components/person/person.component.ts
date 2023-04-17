import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() personName: string | undefined;
  @Input() details: string[] | undefined;

  handleClick(event: Event) {
    console.log('hallo', event)
    this.details?.push('neuer Eintrag')
    // Kurz fuer
    // if (this.details !== undefined) {
    //   this.details.push('neuer Eintrag')
    // }
  }
}
