import { screen, render } from '@testing-library/react';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider } from 'styled-components';
import StocksPrices from './StocksPrices';
import theme from '../../theme';

describe('StocksPrices page', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <StocksPrices />
        </LocalizationProvider>
      </ThemeProvider>
    );

    expect(screen.getByText('US Stock Exchange')).toBeInTheDocument();
  });
});
