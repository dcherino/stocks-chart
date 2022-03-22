import { render } from '@testing-library/react';
import Chart from './Chart';

type PricesData = {
  [key: string]: object[];
};

type ChartProps = {
  prices: PricesData;
  selectedStocks: string[];
};

const mockedSelectedStocks = ['VHC', 'ADOC', 'IMIAF'];
const mockedData: PricesData = {
  open: [
    {
      date: '22 Feb',
      VHC: '123.00',
      ADOC: '123.00',
      IMIAF: '123.00',
    },
    {
      date: '23 Feb',
      VHC: '122.75',
      ADOC: '122.75',
      IMIAF: '122.75',
    },
  ],
  close: [
    {
      date: '22 Feb',
      VHC: '122.82',
      ADOC: '122.82',
      IMIAF: '122.82',
    },
    {
      date: '23 Feb',
      VHC: '122.57',
      ADOC: '122.57',
      IMIAF: '123.04',
    },
  ],
  high: [
    {
      date: '22 Feb',
      VHC: '123.49',
      ADOC: '123.49',
      IMIAF: '123.49',
    },
    {
      date: '23 Feb',
      VHC: '123.25',
      ADOC: '123.25',
      IMIAF: '123.25',
    },
  ],
  low: [
    {
      date: '22 Feb',
      VHC: '122.63',
      ADOC: '122.63',
      IMIAF: '122.63',
    },
    {
      date: '23 Feb',
      VHC: '122.39',
      ADOC: '122.39',
      IMIAF: '122.39',
    },
  ],
};

const props: ChartProps = {
  prices: mockedData,
  selectedStocks: mockedSelectedStocks,
};

describe('Chart component', () => {
  it('renders the Chart correctly', () => {
    render(
      <Chart prices={props.prices} selectedStocks={props.selectedStocks} />
    );
  });
});
