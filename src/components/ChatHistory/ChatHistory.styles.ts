import styled from 'styled-components';

export const ChatHistorySection = styled.section`
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
`;
export const ChatList = styled.ul`
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
`;
