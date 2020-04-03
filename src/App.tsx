import React from 'react';
import { AppWrapper, AppHeader } from './App.styles';
import ChatInput from './components/ChatInput/ChatInput.component';
import ChatHistory from './components/ChatHistory/ChatHistory.component';

function App() {
  return (
    <AppWrapper>
      <AppHeader>
        <h1>SlickChat</h1>
        <div>UserName</div>
      </AppHeader>
      <ChatHistory></ChatHistory>
      <ChatInput></ChatInput>
    </AppWrapper>
  );
}

export default App;
