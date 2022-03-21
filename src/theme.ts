import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    common: {
      black: '#2B2B2A',
      white: '#ffffff',
    },
    primary: {
      main: '#002A5E',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2D55B2',
      contrastText: '#ffffff',
    },
  },
  tertiary: {
    main: '#14E6F1',
    contrastText: '#ffffff',
  },
  mainGray: {
    main: '#A7A9A8',
    contrastText: '#333333',
  },
});

export default theme;
