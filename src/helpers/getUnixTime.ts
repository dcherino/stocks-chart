// eslint-disable-next-line import/prefer-default-export
export const getUnixTime = (date: Date): number => date.getTime() / 1000 || 0;
