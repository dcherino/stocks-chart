import styled from 'styled-components';

export const Message = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background: #efefef;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  min-height: 500px;
`;
