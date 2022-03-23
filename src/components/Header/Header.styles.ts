import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.header`
  grid-area: Header;
  background-color: ${({ theme }) => theme.palette.primary.main};

  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.palette.primary.contrastText};

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 900px;
    margin: 0 auto;
    padding: 24px 0;
  }

  h1 {
    display: none;
  }

  h2 {
    font-size: 16px;
  }

  img {
    width: 250px;
    height: auto;
  }
`;
