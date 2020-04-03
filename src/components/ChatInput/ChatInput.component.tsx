import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {
  ChatInputControl,
  ChatInputFooter,
  ChatInputSection
} from './ChatInput.styles';
import SlickButton from '../SlickButton/SlickButton.component';

const ChatInput = () => {
  return (
    <ChatInputSection>
      <ChatInputControl>
        <TextareaAutosize />
        <SlickButton style={{ height: '4.1rem' }}>Send</SlickButton>
      </ChatInputControl>
      <ChatInputFooter>Chat footer</ChatInputFooter>
    </ChatInputSection>
  );
};

export default ChatInput;
