import { render, screen } from '@testing-library/angular';
import { testModule } from '../../test.module';
import { EventListComponent } from './event-list.component';

describe('EventListComponent', () => {
  it('should create', async () => {
    await render(EventListComponent, testModule);
    screen.logTestingPlaygroundURL();
  });
});
