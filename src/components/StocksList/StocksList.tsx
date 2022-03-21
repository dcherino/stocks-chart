import {
  DataGrid,
  GridColDef,
  GridSelectionModel,
  GridToolbar,
} from '@mui/x-data-grid';
import { useMemo, useState } from 'react';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    filterable: true,
    flex: 0,
  },
  {
    field: 'description',
    headerName: 'Name',
    width: 350,
    filterable: true,
    flex: 1,
  },
  {
    field: 'symbol',
    headerName: 'Symbol',
    width: 150,
    filterable: true,
    flex: 0,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 110,
    editable: true,
    flex: 0,
  },
  {
    field: 'currency',
    headerName: 'Currency',
    width: 160,
    flex: 0,
  },
];

type StocksListProps = {
  stocks: StocksResponse[];
  loading: boolean;
  error: boolean;
  selectStock: (symbol: string[]) => void;
};

interface StocksData extends StocksResponse {
  id: string;
}

const StocksList = ({
  stocks,
  loading,
  error,
  selectStock,
}: StocksListProps) => {
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const [warning, setWarning] = useState<string>('');

  const formattedStocks: StocksData[] = useMemo(() => {
    const newData = [];
    for (let i = 0; i < stocks.length; i += 1) {
      newData.push({ ...stocks[i], id: stocks[i].symbol });
    }

    return newData;
  }, [stocks]);
  console.log(error);
  // const handleClick = useMemo((symbol: string) => {
  //   if (stocksSelected.length < 3) {
  //     const newStocksSelected: string[] = [...stocksSelected, symbol];
  //     selectStock(newStocksSelected);
  //   }
  // }, []);
  console.log(selectStock);

  const handleSelectionModel = (newSelectionModel: GridSelectionModel) => {
    setWarning('');
    if (newSelectionModel.length <= 3) {
      setSelectionModel(newSelectionModel);
    } else {
      setWarning('Maximum of 3 stocks selected at the same time');
    }
  };

  return (
    <div style={{ height: 500, width: '100%' }}>
      {formattedStocks && (
        <>
          <DataGrid
            rows={formattedStocks}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            pageSize={100}
            rowsPerPageOptions={[100, 200, 300, 500, 1000]}
            loading={loading}
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={(newSelectionModel) =>
              handleSelectionModel(newSelectionModel)
            }
            selectionModel={selectionModel}
          />
          {warning && <p>{warning}</p>}
        </>
      )}
    </div>
  );
};

export default StocksList;
