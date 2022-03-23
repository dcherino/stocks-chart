import { ThemeProvider } from 'styled-components';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import Header from './components/Header/Header';
import StocksPrices from './pages/StocksPrices/StocksPrices';

import GlobalStyle from './globalStyle';
import theme from './theme';

import { AppWrap, Main, PagesWrapper, Footer } from './App.styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrap>
        <Header />
        <Main>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <PagesWrapper>
              <StocksPrices />
            </PagesWrapper>
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
