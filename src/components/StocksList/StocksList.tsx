import {
  DataGrid,
  GridColDef,
  GridSelectionModel,
  GridToolbar,
} from '@mui/x-data-grid';
import { useState } from 'react';

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
  selectStock: (symbol: GridSelectionModel) => void;
};

const StocksList = ({
  stocks,
  loading,
  error,
  selectStock,
}: StocksListProps) => {
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const [warning, setWarning] = useState<string>('');

  console.log(error);

  const handleSelectionModel = (newSelectionModel: GridSelectionModel) => {
    setWarning('');
    if (newSelectionModel.length <= 3) {
      setSelectionModel(newSelectionModel);
      selectStock(newSelectionModel);
    } else {
      setWarning('Maximum of 3 stocks selected at the same time');
    }
  };

  return (
    <div style={{ height: 500, width: '100%' }}>
      {stocks && (
        <>
          <DataGrid
            rows={stocks}
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
