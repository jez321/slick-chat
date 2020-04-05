import styled from 'styled-components';

export const ChatMessageItem = styled.li`
  padding: 1rem 0;
`;

export const ChatMessageHeader = styled.header`
  font-weight: bold;
`;

export const ChatMessageUser = styled.span`
  color: ${(props) => props.color};
`;

export const ChatMessageTimestamp = styled.span`
  font-weight: normal;
`;
