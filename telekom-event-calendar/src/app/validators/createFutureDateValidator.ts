import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createFutureDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const dateValue = new Date(value);
    const now = new Date();

    if (now.getTime() - dateValue.getTime() > 0) {
      return { error: 'Date must be in the future' };
    }
    return null;
  };
}
