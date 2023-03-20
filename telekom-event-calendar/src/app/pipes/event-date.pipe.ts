import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from 'src/domain/appointment';

@Pipe({
  name: 'eventDate',
})
export class TelekomDatePipe implements PipeTransform {
  transform(value: Appointment, ...args: unknown[]): unknown {
    if (value.end) {
      return `von ${value.start.toLocaleDateString()} bis ${value.end.toLocaleDateString()}`;
    }
    return `am ${value.start.toLocaleDateString()}`;
  }
}
