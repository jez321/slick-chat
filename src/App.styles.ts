import styled from 'styled-components';
import { BG_COLOR } from './styles/Variables';

export const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  height: 100%;
`;

export const AppHeader = styled.header`
  background-color: ${BG_COLOR};
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  color: white;
  h1,
  div {
    font-size: 3rem;
    margin: 1rem 0;
  }
`;
