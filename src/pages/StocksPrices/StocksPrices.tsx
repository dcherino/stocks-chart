/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { GridSelectionModel } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import StocksList from '../../components/StocksList/StocksList';
import Chart from '../../components/Chart/Chart';
import { getUnixTime } from '../../helpers/getUnixTime';
import { get, getCandles } from '../../services/apiService/apiService';
import { setPricesObject } from '../../helpers/setPrices';

const today: number = getUnixTime(new Date());
const year: number = getUnixTime(new Date('2022-02-22'));
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

  const [from, setFrom] = useState(year);
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
    selectedStocks.forEach(async (symbol) => {
      try {
        const candles = await getCandles(symbol as string, from, to);
        const d = setPricesObject(symbol as string, candles) as PricesObj;

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
    <div style={{ width: '70%', margin: '0 auto' }}>
      <h1>Chart</h1>
      <DatePicker
        label="From"
        value={new Date(from * 1000)}
        inputFormat="dd/MM/yyyy"
        onChange={(newValue) => {
          setFrom(getUnixTime(newValue as Date));
        }}
        renderInput={(params) => (
          <TextField helperText={params?.inputProps?.placeholder} />
        )}
      />
      <DatePicker
        label="To"
        value={new Date(to * 1000)}
        inputFormat="dd/MM/yyyy"
        onChange={(newValue) => {
          setTo(getUnixTime(newValue as Date));
        }}
        renderInput={(params) => (
          <TextField helperText={params?.inputProps?.placeholder} />
        )}
      />

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
