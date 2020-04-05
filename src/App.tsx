import React from 'react';
import { useSelector } from 'react-redux';
import { AppWrapper, AppFooter } from './App.styles';
import { RootState } from './redux/types';
import ChatInput from './components/ChatInput/ChatInput.component';
import ChatHistory from './components/ChatHistory/ChatHistory.component';
import SetUser from './components/SetUser/SetUser.component';
import AppHeader from './components/AppHeader/AppHeader.component';

const selectUser = (state: RootState) => state.app.user;
const App = () => {
  const user = useSelector(selectUser);
  return (
    <AppWrapper>
      <AppHeader user={user}></AppHeader>
      {user ? (
        <>
          <ChatHistory></ChatHistory>
          <ChatInput></ChatInput>
          <AppFooter>Shift+Enter：送信</AppFooter>
        </>
      ) : (
        <SetUser></SetUser>
      )}
    </AppWrapper>
  );
};

export default App;
