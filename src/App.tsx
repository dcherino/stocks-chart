import { ThemeProvider } from 'styled-components';
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
          <StocksPrices />
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
