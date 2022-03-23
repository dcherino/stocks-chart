/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { GridSelectionModel } from '@mui/x-data-grid';
import StocksList from '../../components/StocksList/StocksList';
import Chart from '../../components/Chart/Chart';
import { getUnixTime } from '../../helpers/getUnixTime';
import { get, getCandles } from '../../services/apiService/apiService';
import { setPricesObject } from '../../helpers/setPrices';
import DateRange from '../../components/DateRange/DateRange';

const today: number = getUnixTime(new Date());
const initialFrom: number = getUnixTime(new Date('2022-02-22'));
const initialPrices = {
  open: [{}],
  close: [{}],
  high: [{}],
  low: [{}],
};

const StockPrices = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [results, setResults] = useState<StocksResponse[]>([]);
  const [selectedStocks, setSelectedStocks] = useState<GridSelectionModel>([]);

  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(today);

  const [prices, setPrices] = useState<any>(initialPrices);

  /*
   * Fetch initial stocks data and add the ID property for each object
   * as Material UI DataGrid needs the id property to works properly
   */
  const getStocks = async (url: string) => {
    try {
      const response: StocksResponse[] = await get(url);

      const shapedData = (): StocksData[] => {
        const data = [];
        for (let index = 0; index < response.length; index += 1) {
          data.push({ ...response[index], id: response[index].symbol });
        }
        return data;
      };

      setResults(shapedData());
    } catch (error) {
      setHasError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getStocks('/stock/symbol?exchange=US');
  }, []);

  useEffect(() => {
    let o = { open: [{}], close: [{}], high: [{}], low: [{}] };
    selectedStocks.forEach(async (symbol, idx) => {
      try {
        const candles = await getCandles(symbol as string, from, to);
        const d = setPricesObject(symbol as string, candles) as PricesObj;

        const open = d.open.map((item, index) => ({
          ...o.open[index],
          ...item,
        }));
        const close = d.close.map((item, index) => ({
          ...o.close[index],
          ...item,
        }));
        const high = d.high.map((item, index) => ({
          ...o.high[index],
          ...item,
        }));
        const low = d.low.map((item, index) => ({
          ...o.low[index],
          ...item,
        }));

        o = {
          open,
          close,
          high,
          low,
        };
      } catch (error) {
        console.log(error);
      }
      if (idx === selectedStocks.length - 1) {
        setPrices({ ...o });
      }
    });
  }, [from, to]);

  const selectStock = async (selectionModel: GridSelectionModel) => {
    const difference = selectionModel.filter(
      (x) => !selectedStocks.includes(x)
    );

    if (difference.length > 0) {
      try {
        const candles = await getCandles(difference[0] as string, from, to);
        const d = setPricesObject(
          difference[0] as string,
          candles
        ) as PricesObj;

        const o = { ...prices };

        const open = d.open.map((item, index) => ({
          ...item,
          ...o.open[index],
        }));
        const close = d.close.map((item, index) => ({
          ...item,
          ...o.close[index],
        }));
        const high = d.high.map((item, index) => ({
          ...item,
          ...o.high[index],
        }));
        const low = d.low.map((item, index) => ({
          ...item,
          ...o.low[index],
        }));

        const newObj = {
          open,
          close,
          high,
          low,
        };

        setPrices({ ...newObj });
      } catch (error) {
        console.log(error);
      }
    }

    setSelectedStocks(selectionModel);
  };

  return (
    <div style={{ margin: '0 auto' }}>
      <h3>US Stock Exchange</h3>

      <DateRange from={from} to={to} setFrom={setFrom} setTo={setTo} />

      <Chart prices={prices} selectedStocks={selectedStocks as string[]} />

      {!hasError && (
        <StocksList
          stocks={results}
          selectStock={selectStock}
          loading={loading}
        />
      )}
      {hasError && <p>Opps! There was a problem...</p>}
    </div>
  );
};

export default StockPrices;
