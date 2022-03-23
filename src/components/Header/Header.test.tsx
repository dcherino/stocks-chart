import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import theme from '../../theme';

describe('Header Component', () => {
  it('renders and shows elements', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByText(/Daniel Cherino/));
    expect(screen.getByText('Schroders'));
    expect(screen.getByAltText('Logo Schroders'));
  });
});
