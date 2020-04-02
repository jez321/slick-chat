import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {
  AppWrapper,
  AppHeader,
  ChatInputFooter,
  ChatInputControl,
  ChatInput,
  ChatHistory
} from './App.styles';

function App() {
  return (
    <AppWrapper>
      <AppHeader>
        <h1>SlickChat</h1>
        <div>UserName</div>
      </AppHeader>
      <ChatHistory>
        <ul>
          <li>
            <header>
              UserName <span className="timestamp">５分前</span>
            </header>
            <pre>Chat message timestamp te t tete ete</pre>
          </li>
          <li>
            <header>
              UserName <span className="timestamp">５分前</span>
            </header>
            <pre>Chat message timestamp te t tete ete</pre>
          </li>
          <li>
            <header>
              UserName <span className="timestamp">５分前</span>
            </header>
            <pre>Chat message timestamp te t tete ete</pre>
          </li>
          <li>
            <header>
              UserName <span className="timestamp">５分前</span>
            </header>
            <pre>Chat message timestamp te t tete ete</pre>
          </li>
        </ul>
      </ChatHistory>
      <ChatInput>
        <ChatInputControl>
          <TextareaAutosize />
          <button type="submit">Send</button>
        </ChatInputControl>
        <ChatInputFooter>Chat footer</ChatInputFooter>
      </ChatInput>
    </AppWrapper>
  );
}

export default App;
