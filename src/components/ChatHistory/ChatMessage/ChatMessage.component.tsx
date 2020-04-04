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
};
const ChatMessage = ({ children, user, timestamp }: ChatMessageProps) => {
  return (
    <ChatMessageItem>
      <ChatMessageHeader>
        {user}&nbsp;
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
