import React from 'react';
import { useSelector } from 'react-redux';
import { AppWrapper, AppHeader } from './App.styles';
import { RootState } from './redux/types';
import ChatInput from './components/ChatInput/ChatInput.component';
import ChatHistory from './components/ChatHistory/ChatHistory.component';
import SetUser from './components/SetUser/SetUser.component';

const selectUser = (state: RootState) => state.app.user;
const App = () => {
  const user = useSelector(selectUser);
  return (
    <AppWrapper>
      <AppHeader>
        <h1>SlickChat</h1>
        <div>{user}</div>
      </AppHeader>
      {user ? (
        <>
          <ChatHistory></ChatHistory>
          <ChatInput></ChatInput>
        </>
      ) : (
        <SetUser></SetUser>
      )}
    </AppWrapper>
  );
};

export default App;
