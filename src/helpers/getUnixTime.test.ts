import { getUnixTime } from './getUnixTime';

describe('getUnixTime helper', () => {
  it('returns unix timestamp', () => {
    const date: Date = new Date('2022-03-21');
    const unixTime: number = getUnixTime(date);

    const revertedDate: Date = new Date(unixTime * 1000);

    expect(revertedDate.getDate()).toBe(21);
    expect(revertedDate.getMonth()).toBe(2);
    expect(revertedDate.getFullYear()).toBe(2022);
  });
});
