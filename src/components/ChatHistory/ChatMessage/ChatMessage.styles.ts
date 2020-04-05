import styled from 'styled-components';
import { FONTSIZE_SMALL, FONTCOLOR_MID } from '../../../styles/Variables';

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
  color: ${FONTCOLOR_MID};
  font-size: ${FONTSIZE_SMALL};
`;
