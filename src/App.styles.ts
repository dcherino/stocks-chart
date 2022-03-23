import styled from 'styled-components';

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
`;

export const Main = styled.main`
  grid-area: Main;
  background: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PagesWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  background: #fff;
  padding: 20px 40px;
  margin-top: 20px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 32px;
  }
`;

export const Footer = styled.footer`
  grid-area: Footer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.secondary.contrastText};

  a {
    color: ${({ theme }) => theme.palette.secondary.contrastText};
  }

  a:hover {
    text-decoration: none;
  }
`;
