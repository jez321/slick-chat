import React from 'react';
import {
  ChatMessageItem,
  ChatMessageHeader,
  ChatMessageTimestamp
} from './ChatMessage.styles';

type ChatMessageProps = {
  children: React.ReactNode;
  user: string;
  time: Date;
};
const ChatMessage = ({ children, user, time }: ChatMessageProps) => {
  return (
    <ChatMessageItem>
      <ChatMessageHeader>
        {user}{' '}
        <ChatMessageTimestamp>{time.toLocaleTimeString()}</ChatMessageTimestamp>
      </ChatMessageHeader>
      <pre>{children}</pre>
    </ChatMessageItem>
  );
};

export default ChatMessage;
