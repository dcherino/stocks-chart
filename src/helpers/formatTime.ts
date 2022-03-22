// eslint-disable-next-line import/prefer-default-export
export const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });

  return `${day} ${month}`;
};
