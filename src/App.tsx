import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import theme from './theme';
import { AppWrap, Header, Main, Footer } from './App.styles';
import logo from './logo.svg';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrap>
        <Header>
          <h1>Create React App DCA</h1>
        </Header>
        <Main>
          <img src={logo} className="logo" alt="React logo" />
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
