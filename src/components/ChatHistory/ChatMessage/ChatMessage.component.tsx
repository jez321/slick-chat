import React from 'react';
import Moment from 'react-moment';
import {
  ChatMessageItem,
  ChatMessageHeader,
  ChatMessageTimestamp,
} from './ChatMessage.styles';

type ChatMessageProps = {
  children: React.ReactNode;
  user: string;
  timestamp: number;
  color: string;
};
const ChatMessage = ({
  children,
  user,
  timestamp,
  color,
}: ChatMessageProps) => {
  return (
    <ChatMessageItem>
      <ChatMessageHeader>
        <span
          style={{
            color,
          }}>
          {user}
        </span>
        &nbsp;
        <ChatMessageTimestamp>
          <Moment unix fromNow>
            {timestamp}
          </Moment>
        </ChatMessageTimestamp>
      </ChatMessageHeader>
      <pre>{children}</pre>
    </ChatMessageItem>
  );
};

export default ChatMessage;
