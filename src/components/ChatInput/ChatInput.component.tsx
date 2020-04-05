import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useFirebase } from 'react-redux-firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ChatInputControl, ChatInputSection } from './ChatInput.styles';
import SlickButton from '../SlickButton/SlickButton.component';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types';

const timestampeMsToS = (timestamp: number) => Math.floor(timestamp / 1000);
const selectUser = (state: RootState) => state.app.user;
let textareaRef: any;
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
    if (textareaRef) {
      textareaRef.focus();
    }
    firebase.push('messages', message);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    postMessage();
  };

  const handleChange = (event: any) => {
    setMessageText(event.target.value);
  };

  const handleKeyUp = (event: any) => {
    if (messageText.trim() !== '' && event.key === 'Enter' && event.shiftKey) {
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
          maxRows={4}
          inputRef={(node: HTMLTextAreaElement) => (textareaRef = node)}
          autoFocus
        />
        <SlickButton
          style={{ fontSize: '1.3rem', height: '4rem' }}
          disabled={messageText.trim() === ''}
          onClick={handleSubmit}>
          <FontAwesomeIcon icon={faPaperPlane} />
          &nbsp;送信
        </SlickButton>
      </ChatInputControl>
    </ChatInputSection>
  );
};

export default ChatInput;
