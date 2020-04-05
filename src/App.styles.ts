import styled from 'styled-components';
import {
  BG_COLOR,
  FONTCOLOR_LIGHT,
  FONTSIZE_LARGE,
  FONTCOLOR_MID,
  FONTSIZE_SMALL,
} from './styles/Variables';

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
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  color: ${FONTCOLOR_LIGHT};
  h1,
  div {
    font-size: ${FONTSIZE_LARGE};
    margin: 1rem 0;
  }
`;

export const AppFooter = styled.footer`
  background-color: ${BG_COLOR};
  padding: 0.1rem 1rem;
  color: ${FONTCOLOR_MID};
  font-size: ${FONTSIZE_SMALL};
`;
