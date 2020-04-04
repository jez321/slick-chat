import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useFirebase } from 'react-redux-firebase';
import {
  ChatInputControl,
  ChatInputFooter,
  ChatInputSection,
} from './ChatInput.styles';
import SlickButton from '../SlickButton/SlickButton.component';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types';

const timestampeMsToS = (timestamp: number) => Math.floor(timestamp / 1000);
const selectUser = (state: RootState) => state.app.user;
const ChatInput = () => {
  const firebase = useFirebase();
  const user = useSelector(selectUser);
  const [messageText, setMessageText] = useState('');

  const postMessage = () => {
    const message = {
      text: messageText,
      user,
      timestamp: timestampeMsToS(Date.now()),
    };
    setMessageText('');
    return firebase.push('messages', message);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    postMessage();
  };
  const handleChange = (event: any) => {
    setMessageText(event.target.value);
  };

  const handleKeyUp = (event: any) => {
    if (event.key === 'Enter' && event.shiftKey) {
      postMessage();
    }
  };

  return (
    <ChatInputSection>
      <ChatInputControl>
        <TextareaAutosize
          onKeyUp={handleKeyUp}
          onChange={handleChange}
          value={messageText}
          autoFocus
        />
        <SlickButton onClick={handleSubmit} style={{ height: '4.1rem' }}>
          Send
        </SlickButton>
      </ChatInputControl>
      <ChatInputFooter>Chat footer</ChatInputFooter>
    </ChatInputSection>
  );
};

export default ChatInput;