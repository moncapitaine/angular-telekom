import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlaygroundService {
  constructor() {}

  private testVariable = 'Hallo';

  aendern() {
    this.testVariable = this.testVariable + ' y ';
  }

  getTestVariableValue() {
    return this.testVariable;
  }
}
