import { Component } from '@angular/core';
import { PlaygroundService } from '../../services/playground.service';

@Component({
  selector: 'app-playground-page',
  templateUrl: './playground-page.component.html',
  styleUrls: ['./playground-page.component.css'],
})
export class PlaygroundPageComponent {
  constructor(protected service: PlaygroundService) {
    this.testVariableService = service.getTestVariableValue();
  }
  protected testVariable = 'Hallo';
  protected testVariableService: string;
  aendern() {
    this.testVariable = this.testVariable + ' x ';
    this.service.aendern();
  }
  getTestVariableWert() {
    return this.testVariable;
  }
}
