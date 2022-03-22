type StocksCandleResponse = {
  c: number[];
  h: number[];
  l: number[];
  o: number[];
  s: 'ok' | 'no_data';
  t: number[];
  v: number[];
};

interface StocksData extends StocksResponse {
  id: string;
}

type ChartData = {
  [key: string]: string | number;
};

type PricesObj = {
  open: ChartData[];
  close: ChartData[];
  high: ChartData[];
  low: ChartData[];
};
