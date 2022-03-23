import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10px 0;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.palette.grey[700]};
  }
`;

export const DatePickerWrap = styled.div`
  div:first-child {
    margin-right: 20px;
  }
`;
