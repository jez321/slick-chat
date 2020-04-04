import React, { useEffect, useRef } from 'react';
import { ChatList, ChatHistorySection } from './ChatHistory.styles';
import ChatMessage from './ChatMessage/ChatMessage.component';
import { useSelector } from 'react-redux';
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { RootState } from '../../redux/types';

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
    messagesEndRef.current.scrollIntoView(false);
  }, [messages]);
  return (
    <ChatHistorySection>
      <ChatList>
        {messages
          ? messages.map(({ key, value: { user, text, timestamp } }) => (
              <ChatMessage key={key} user={user} timestamp={timestamp}>
                {text}
              </ChatMessage>
            ))
          : null}
        <div ref={messagesEndRef} />
      </ChatList>
    </ChatHistorySection>
  );
};

export default ChatHistory;
