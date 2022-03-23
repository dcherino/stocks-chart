/* eslint-disable react/jsx-props-no-spreading */
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import { getUnixTime } from '../../helpers/getUnixTime';
import { Wrapper, DatePickerWrap } from './DateRange.styles';

type DateRangeProps = {
  to: number;
  from: number;
  setTo: (timestamp: number) => void;
  setFrom: (timestamp: number) => void;
};

const DateRange = ({
  to,
  from,
  setTo,
  setFrom,
}: DateRangeProps): JSX.Element => (
  <Wrapper>
    <p>Please select a date range: </p>
    <DatePickerWrap>
      <DatePicker
        label="From"
        value={new Date(from * 1000)}
        inputFormat="dd/MM/yyyy"
        onChange={(newValue) => {
          setFrom(getUnixTime(newValue as Date));
        }}
        renderInput={(params) => (
          <TextField {...params} helperText={params?.inputProps?.placeholder} />
        )}
      />

      <DatePicker
        label="To"
        value={new Date(to * 1000)}
        inputFormat="dd/MM/yyyy"
        onChange={(newValue) => {
          setTo(getUnixTime(newValue as Date));
        }}
        renderInput={(params) => (
          <TextField {...params} helperText={params?.inputProps?.placeholder} />
        )}
      />
    </DatePickerWrap>
  </Wrapper>
);

export default DateRange;
