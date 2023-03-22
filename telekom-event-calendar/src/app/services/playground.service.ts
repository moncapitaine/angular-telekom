import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlaygroundService {
  constructor() {
    console.log('pg service', document.location.pathname);
  }

  private testVariable = 'Hallo';

  aendern() {
    this.testVariable = this.testVariable + ' y ';
  }

  getTestVariableValue() {
    return this.testVariable;
  }
}
