import React from 'react';
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
        {user} <ChatMessageTimestamp>{timestamp}</ChatMessageTimestamp>
      </ChatMessageHeader>
      <pre>{children}</pre>
    </ChatMessageItem>
  );
};

export default ChatMessage;
