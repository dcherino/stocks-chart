import { formatTime } from '../formatTime';

describe('formatTime helper', () => {
  it('returns a formatted date string from timestamp with format: 10 Jan', () => {
    const date = new Date('2022-03-22T03:04:05.678Z');

    // Divide timestamp by 1000 to simulate the API response which it is in seconds, no milliseconds
    const formattedDate = formatTime(date.getTime() / 1000);

    expect(formattedDate).toBe('22 Mar');
  });
});
