import styled from 'styled-components';
import { BG_COLOR } from '../../styles/Variables';

export const ChatInput = styled.section`
  text-align: left;
  width: 100%;
`;

export const ChatInputFooter = styled.div`
  background-color: ${BG_COLOR};
  padding: 0.5rem 2rem;
  color: #ccc;
`;
export const ChatInputControl = styled.div`
  display: flex;
  justify-content: stretch;
  textarea {
    resize: none;
    font-size: 1.6rem;
    padding: 0.85rem 2rem;
    flex: 1 0 0;
  }
`;

export const ChatInputSection = styled.section``;
