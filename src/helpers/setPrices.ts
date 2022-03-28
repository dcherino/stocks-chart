import { formatTime } from './formatTime';

type InitialValues = 'h' | 'l' | 'c' | 'o';

type NewPricesObj = {
  [key: string]: ChartData[];
};

// eslint-disable-next-line import/prefer-default-export
export const setPricesObject = (
  symbol: string,
  response: StocksCandleResponse
) => {
  const newPricesObj: NewPricesObj = {
    open: [],
    close: [],
    high: [],
    low: [],
  };

  const priceTypes = Object.keys(newPricesObj);

  priceTypes.map((priceType: string) =>
    response.t.forEach((timestamp: number, index: number) => {
      const date = formatTime(timestamp);

      const initial = priceType[0] as InitialValues;
      if (newPricesObj[priceType].find((el: ChartData) => el.date === date)) {
        newPricesObj[priceType].push({
          ...newPricesObj[priceType][index],
          [symbol]: response[initial][index],
        });
        return;
      }

      newPricesObj[priceType].push({
        ...newPricesObj[priceType][index],
        date,
        [symbol]: response[initial][index].toFixed(2),
      });
    })
  );
  return newPricesObj;
};
