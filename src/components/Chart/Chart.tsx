import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import theme from '../../theme';

type PricesData = {
  [key: string]: object[];
};

type ChartProps = {
  prices: PricesData;
  selectedStocks: string[];
};

const Chart = ({ prices, selectedStocks }: ChartProps): JSX.Element => {
  const [priceSelected, setPriceSelected] = useState<string>('open');

  const handleClick = (value: string): void => {
    setPriceSelected(value);
  };

  return (
    <div style={{ height: '500px', position: 'relative' }}>
      {selectedStocks.length <= 0 && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            background: '#efefef',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <p>Please select at least one item from the list below</p>
        </div>
      )}

      <ResponsiveContainer
        width="100%"
        height="100%"
        minHeight="500px"
        key={Math.random()}
      >
        <LineChart
          key={`lcwrap_${Math.random()}`}
          width={500}
          height={300}
          data={prices[priceSelected]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            label={{ value: 'Date', position: 'bottom' }}
            dataKey="date"
            type="category"
            allowDuplicatedCategory={false}
          />
          <YAxis
            label={{ value: 'price ($)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />

          {selectedStocks.map((symbol, index) => {
            let color = theme.palette.primary.main;
            if (index === 1) color = theme.palette.secondary.main;
            if (index === 2) color = theme.tertiary.main;

            return (
              <Line
                key={`lc_${symbol}_${Math.random()}`}
                type="monotone"
                dataKey={symbol}
                stroke={color}
                strokeWidth={3}
                activeDot={{ r: 8 }}
                animationDuration={500}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>

      <ButtonGroup
        size="large"
        variant="contained"
        aria-label="large button group"
      >
        <Button
          key="open"
          color={priceSelected === 'open' ? 'info' : 'primary'}
          onClick={() => handleClick('open')}
        >
          Open
        </Button>
        <Button
          key="close"
          color={priceSelected === 'close' ? 'info' : 'primary'}
          onClick={() => handleClick('close')}
        >
          Close
        </Button>
        <Button
          key="high"
          color={priceSelected === 'high' ? 'info' : 'primary'}
          onClick={() => handleClick('high')}
        >
          High
        </Button>
        <Button
          key="low"
          color={priceSelected === 'low' ? 'info' : 'primary'}
          onClick={() => handleClick('low')}
        >
          Low
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Chart;
