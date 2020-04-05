import styled from 'styled-components';
import { FONTSIZE_NORMAL } from '../../styles/Variables';

export const SlickButtonWrapper = styled.button`
  font-size: ${FONTSIZE_NORMAL};
  padding: 1rem 2rem;
  background-color: #444;
  border: none;
  color: white;
  transition-duration: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
  &:active {
    background-color: #666;
  }
  &:disabled {
    opacity: 0.6;
  }
`;
