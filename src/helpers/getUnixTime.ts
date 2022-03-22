// eslint-disable-next-line import/prefer-default-export
export const getUnixTime = (date: Date): number =>
  Math.floor(date.getTime() / 1000) || 0;
