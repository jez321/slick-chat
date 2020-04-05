import styled from 'styled-components';
import { BG_COLOR, FONTCOLOR_MID, FONTSIZE_SMALL } from './styles/Variables';

export const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  height: 100%;
`;

export const AppFooter = styled.footer`
  background-color: ${BG_COLOR};
  padding: 0.1rem 1rem;
  color: ${FONTCOLOR_MID};
  font-size: ${FONTSIZE_SMALL};
`;
