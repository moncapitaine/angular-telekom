import { screen, render } from '@testing-library/angular';
import { testModule } from '../../test.module';

import { CreateAppointmentPageComponent } from './create-appointment-page.component';

describe('CreateAppointmentPageComponent', () => {
  it('should create', async () => {
    await render(CreateAppointmentPageComponent, testModule);
    screen.logTestingPlaygroundURL();
  });
});
