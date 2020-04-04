import React, { useEffect, useRef } from 'react';
import { ChatList, ChatHistorySection } from './ChatHistory.styles';
import ChatMessage from './ChatMessage/ChatMessage.component';
import { useSelector } from 'react-redux';
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { RootState } from '../../redux/types';
var randomColor = require('randomcolor');

type Message = {
  text: string;
  timestamp: number;
  user: string;
};
type FirebaseMessage = {
  key: string;
  value: Message;
};

const selectMessages = (state: any) => state.firebase.ordered.messages; // todo TSnpm
const ChatHistory = () => {
  useFirebaseConnect(['messages']);
  const messages: FirebaseMessage[] = useSelector(selectMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!messagesEndRef.current) return;
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  const colorCache: any = {};
  return (
    <ChatHistorySection>
      <ChatList>
        {messages
          ? messages.map(({ key, value: { user, text, timestamp } }) => {
              if (!(user in colorCache)) {
                colorCache[user] = randomColor({
                  luminosity: 'dark',
                  seed: user,
                });
              }
              return (
                <ChatMessage
                  key={key}
                  user={user}
                  timestamp={timestamp}
                  color={colorCache[user]}>
                  {text}
                </ChatMessage>
              );
            })
          : null}
        <div ref={messagesEndRef} />
      </ChatList>
    </ChatHistorySection>
  );
};

export default ChatHistory;
