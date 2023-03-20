import { TelekomDatePipe } from './event-date.pipe';

describe('TelekomDatePipe', () => {
  it('create an instance', () => {
    const pipe = new TelekomDatePipe();
    expect(pipe).toBeTruthy();
  });
});
