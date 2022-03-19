import styled, { keyframes } from 'styled-components';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppWrap = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 2fr 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    'Header'
    'Main'
    'Footer';

  .logo {
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

export const Header = styled.header`
  grid-area: Header;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.palette.primary.text};
`;

export const Main = styled.main`
  grid-area: Main;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  grid-area: Footer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.text};

  a {
    color: ${({ theme }) => theme.palette.secondary.text};
  }

  a:hover {
    text-decoration: none;
  }
`;
