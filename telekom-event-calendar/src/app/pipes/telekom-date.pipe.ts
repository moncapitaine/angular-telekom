import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telekomDate',
})
export class TelekomDatePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): unknown {
    return `am: ${value.toLocaleDateString()}`;
  }
}
