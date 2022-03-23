import { screen, render } from '@testing-library/react';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider } from 'styled-components';
import DateRange from './DateRange';
import theme from '../../theme';
import { getUnixTime } from '../../helpers/getUnixTime';

const to: number = getUnixTime(new Date('2022-02-22'));
const from: number = getUnixTime(new Date('2022-01-22'));
const setFromMocked = jest.fn();
const setToMocked = jest.fn();

describe('DateRange component', () => {
  it('renders component correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DateRange
            from={from}
            to={to}
            setFrom={setFromMocked}
            setTo={setToMocked}
          />
        </LocalizationProvider>
      </ThemeProvider>
    );

    expect(screen.getByText(/Please select a date range/)).toBeInTheDocument();
    expect(screen.getByLabelText('From')).toBeInTheDocument();
    expect(screen.getByLabelText('To')).toBeInTheDocument();
  });
});
