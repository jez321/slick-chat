import styled from 'styled-components';
import { FONTSIZE_NORMAL } from '../../styles/Variables';

export const ChatInput = styled.section`
  text-align: left;
  width: 100%;
`;

export const ChatInputControl = styled.div`
  display: flex;
  justify-content: stretch;
  textarea {
    resize: none;
    font-size: ${FONTSIZE_NORMAL};
    min-height: 4rem;
    padding: 0.85rem 1rem;
    flex: 1 0 0;
  }
`;

export const ChatInputSection = styled.section``;
