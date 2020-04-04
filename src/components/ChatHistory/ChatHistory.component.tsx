import React, { useEffect, useRef } from 'react';
import {
  ChatList,
  ChatHistorySection,
  LoadingMessage,
} from './ChatHistory.styles';
import ChatMessage from './ChatMessage/ChatMessage.component';
import { useSelector } from 'react-redux';
import { useFirebaseConnect, isLoaded } from 'react-redux-firebase';
import { RootState, Message } from '../../redux/types';
var randomColor = require('randomcolor');

type FirebaseMessage = {
  key: string;
  value: Message;
};

let init = false;
const selectMessages = (state: RootState) => state.firebase.ordered.messages; // todo TSnpm
const ChatHistory = () => {
  useFirebaseConnect(['messages']);
  const messages: FirebaseMessage[] = useSelector(selectMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!messagesEndRef.current) return;
    messagesEndRef.current.scrollIntoView({
      behavior: init ? 'smooth' : 'auto',
    });
    init = true;
  }, [messages]);
  const colorCache: any = {};
  return (
    <ChatHistorySection>
      {isLoaded(messages) ? (
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
      ) : (
        <LoadingMessage>読み込み中...</LoadingMessage>
      )}
    </ChatHistorySection>
  );
};

export default ChatHistory;
