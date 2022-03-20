// import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useMemo } from 'react';
import get from '../../services/apiService/apiService';

// const columns: GridColDef[] = [
//   {
//     field: 'id',
//     headerName: 'ID',
//     width: 90,
//   },
//   {
//     field: 'description',
//     headerName: 'Name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'symbol',
//     headerName: 'Symbol',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'type',
//     headerName: 'Type',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'currency',
//     headerName: 'Currency',
//     width: 160,
//   },
// ];

// const test = [
//   {
//     id: 'test',
//     description: 'test',
//     symbol: 'test',
//     type: 'test',
//     currency: 'test',
//   },
// ];

type StocksListProps = {
  stocks: StocksResponse[];
};

interface StocksData extends StocksResponse {
  id: string;
}

const StocksList = ({ stocks }: StocksListProps) => {
  const formattedStocks: StocksData[] = useMemo(() => {
    const newData = [];
    for (let i = 0; i < stocks.length; i += 1) {
      newData.push({ ...stocks[i], id: stocks[i].symbol });
    }

    return newData;
  }, [stocks]);

  const handleClick = (symbol: string): void => {
    get(
      `/stock/candle?symbol=${symbol}&resolution=D&from=1572651390&to=1575243390`
    );
  };
  return (
    <div style={{ height: 500, width: '100%' }}>
      {
        formattedStocks &&
          formattedStocks.map(
            (stock, index) =>
              index < 10 && (
                <button type="button" onClick={() => handleClick(stock.symbol)}>
                  {stock.description}
                </button>
              )
          )
        // <DataGrid
        //   rows={test}
        //   columns={columns}
        //   pageSize={100}
        //   rowsPerPageOptions={[5]}
        //   checkboxSelection
        //   disableSelectionOnClick
        // />
      }
    </div>
  );
};

export default StocksList;
