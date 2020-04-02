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

export const ChatHistory = styled.section`
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    li {
      padding: 1rem 0;
      header {
        font-weight: bold;
        .timestamp {
          font-weight: normal;
        }
      }
    }
  }
`;

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
    font-size: 2rem;
    padding: 1rem 2rem;
    flex: 1 0 0;
  }
  button {
    font-size: 2rem;
    padding: 1rem 2rem;
    height: 4.1rem;
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
  }
`;
