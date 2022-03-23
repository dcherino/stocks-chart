import { screen, render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import PricesButtons from './PricesButtons';
import theme from '../../theme';

const fn = jest.fn();

describe('PricesButtons component', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <PricesButtons handleClick={fn} priceSelected="open" />
      </ThemeProvider>
    );
    expect(
      screen.getByRole('button', {
        name: /Open Prices/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Close Prices/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /High Prices/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Low Prices/i,
      })
    ).toBeInTheDocument();
  });

  it('calls the function when clicking a button', () => {
    render(
      <ThemeProvider theme={theme}>
        <PricesButtons handleClick={fn} priceSelected="open" />
      </ThemeProvider>
    );

    const openButton = screen.getByRole('button', {
      name: /Open Prices/i,
    });
    fireEvent.click(openButton);

    expect(fn).toHaveBeenCalled();
  });
});
