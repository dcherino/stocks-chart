import { ThemeProvider } from 'styled-components';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import GlobalStyle from './globalStyle';
import theme from './theme';
import { AppWrap, Header, Main, Footer } from './App.styles';
import StocksPrices from './pages/StocksPrices/StocksPrices';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrap>
        <Header>
          <h1>Schroders</h1>
        </Header>
        <Main>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <StocksPrices />
          </LocalizationProvider>
        </Main>
        <Footer>
          <p>
            An opinionated quick start{' '}
            <a href="https://github.com/facebook/create-react-app">
              Create React App
            </a>
          </p>
        </Footer>
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;
