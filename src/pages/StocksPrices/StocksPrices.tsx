import { useEffect, useState } from 'react';
import StocksList from '../../components/StocksList/StocksList';
import get from '../../services/apiService/apiService';

const Chart = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [results, setResults] = useState<StocksResponse[]>([]);

  const getStocks = async (url: string) => {
    try {
      const data: StocksResponse[] = await get(url);
      setResults(data);
    } catch (error) {
      setHasError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getStocks('/stock/symbol?exchange=US');
  }, []);

  const selectStock = async (symbol: string[]) => {
    const stockData = await get(
      `/stock/candle?symbol=${symbol}&resolution=D&from=1572651390&to=1575243390`
    );
    console.log(stockData);
  };

  return (
    <div style={{ width: '70%', margin: '0 auto' }}>
      <h1>Chart</h1>
      {/* {loading && <p>Loading...</p>}
      {!loading && !hasError && ( */}
      <StocksList
        stocks={results}
        selectStock={selectStock}
        loading={loading}
        error={hasError}
      />
      {/* )}
      {!loading && hasError && <p>Opps! There was a problem...</p>} */}
    </div>
  );
};

export default Chart;
