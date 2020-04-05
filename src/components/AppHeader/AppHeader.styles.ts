import styled from 'styled-components';
import {
  BG_COLOR,
  FONTCOLOR_LIGHT,
  FONTSIZE_LARGE,
} from '../../styles/Variables';

export const AppHeaderWrapper = styled.header`
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
