import { render, screen } from '@testing-library/angular';
import { testModule } from '../../test.module';
import { AppointmentDetailsPageComponent } from './appointment-details-page.component';

describe('the details page...', () => {
  it('should render', async () => {
    await render(AppointmentDetailsPageComponent, { ...testModule });
    screen.logTestingPlaygroundURL();
  });
});
