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
import PricesButtons from '../PricesButtons/PricesButtons';
import { Message, Wrapper } from './Chart.styles';

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
    <Wrapper>
      {selectedStocks.length <= 0 && (
        <Message>
          <p>Please select at least one item from the list below</p>
        </Message>
      )}

      <ResponsiveContainer
        width="100%"
        height="100%"
        minHeight="500px"
        minWidth="800px"
        key={Math.random()}
      >
        <LineChart
          key={`lcwrap_${Math.random()}`}
          width={500}
          height={300}
          data={prices[priceSelected]}
          margin={{
            top: 5,
            right: 0,
            left: 0,
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

      <PricesButtons priceSelected={priceSelected} handleClick={handleClick} />
    </Wrapper>
  );
};

export default Chart;
