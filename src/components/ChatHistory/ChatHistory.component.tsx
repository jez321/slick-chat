import React, { useEffect } from 'react';
import {
  ChatList,
  ChatHistorySection,
  LoadingMessage,
} from './ChatHistory.styles';
import ChatMessage from './ChatMessage/ChatMessage.component';
import { useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import { useFirebaseConnect, isLoaded } from 'react-redux-firebase';
import { RootState, Message } from '../../redux/types';
var randomColor = require('randomcolor');

type FirebaseMessage = {
  key: string;
  value: Message;
};

const selectMessages = (state: RootState) => state.firebase.ordered.messages;
const ChatHistory = () => {
  useFirebaseConnect(['messages']);
  const messages: FirebaseMessage[] = useSelector(selectMessages);
  useEffect(() => {
    scroll.scrollToBottom({
      smooth: true,
      containerId: 'chatList',
      duration: 200,
    });
  }, [messages]);
  const colorCache: any = {};
  return (
    <ChatHistorySection id="chatList">
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
        </ChatList>
      ) : (
        <LoadingMessage>読み込み中...</LoadingMessage>
      )}
    </ChatHistorySection>
  );
};

export default ChatHistory;
