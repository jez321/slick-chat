import styled from 'styled-components';

export const ChatHistorySection = styled.section`
  padding: 0 1rem;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;
export const ChatList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  height: 100%;
`;

export const LoadingMessage = styled.div`
  margin-bottom: 1rem;
`;
