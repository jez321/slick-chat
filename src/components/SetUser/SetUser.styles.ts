import styled from 'styled-components';
import { FONTSIZE_LARGE } from '../../styles/Variables';

export const SetUserSection = styled.section`
  height: 100%;
  margin-top: 2rem;
  text-align: center;
`;

export const SetUserHeader = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const SetUserErrorMessage = styled.div`
  color: red;
`;

export const SetUserInput = styled.input`
  font-size: ${FONTSIZE_LARGE};
  padding: 1rem;
  border: solid 1px #999;
  border-radius: 5px;
`;
