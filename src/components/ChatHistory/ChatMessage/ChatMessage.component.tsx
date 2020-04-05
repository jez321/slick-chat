import React from 'react';
import Moment from 'react-moment';
import {
  ChatMessageItem,
  ChatMessageHeader,
  ChatMessageTimestamp,
  ChatMessageUser,
} from './ChatMessage.styles';

type ChatMessageProps = {
  children: React.ReactNode;
  user: string;
  timestamp: number;
  color: string;
};
const ChatMessage = React.memo(
  ({ children, user, timestamp, color }: ChatMessageProps) => {
    return (
      <ChatMessageItem>
        <ChatMessageHeader>
          <ChatMessageUser color={color}>{user}</ChatMessageUser>
          &nbsp;
          <ChatMessageTimestamp>
            <Moment locale="ja" unix fromNow>
              {timestamp}
            </Moment>
          </ChatMessageTimestamp>
        </ChatMessageHeader>
        <pre>{children}</pre>
      </ChatMessageItem>
    );
  }
);

export default ChatMessage;
