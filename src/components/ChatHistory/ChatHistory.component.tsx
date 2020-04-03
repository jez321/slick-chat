import React from 'react';
import { ChatList, ChatHistorySection } from './ChatHistory.styles';
import ChatMessage from './ChatMessage/ChatMessage.component';

const ChatHistory = () => {
  /* reduxから取得 */
  const messages = [
    {
      id: 3,
      user: 'UserOne',
      message: 'This is yet another message',
      time: new Date(2020, 3, 29, 9, 24, 33)
    },
    {
      id: 2,
      user: 'UserOne',
      message: 'This is a message',
      time: new Date(2020, 3, 29, 9, 25, 33)
    },
    {
      id: 1,
      user: 'UserOne',
      message: 'This is another',
      time: new Date(2020, 3, 29, 9, 26, 33)
    }
  ];
  return (
    <ChatHistorySection>
      <ChatList>
        {messages.map(({ id, user, message, time }) => (
          <ChatMessage key={id} user={user} time={time}>
            {message}
          </ChatMessage>
        ))}
      </ChatList>
    </ChatHistorySection>
  );
};

export default ChatHistory;
