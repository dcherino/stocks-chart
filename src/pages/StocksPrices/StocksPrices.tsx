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

  return (
    <div>
      <h1>Chart</h1>
      {loading && <p>Loading...</p>}
      {!loading && !hasError && <StocksList stocks={results} />}
      {!loading && hasError && <p>Opps! There was a problem...</p>}
    </div>
  );
};

export default Chart;
