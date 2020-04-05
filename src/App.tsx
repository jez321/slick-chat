import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AppWrapper, AppHeader, AppFooter } from './App.styles';
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
        {user ? (
          <div>
            <FontAwesomeIcon icon={faUser} />
            &nbsp;{user}
          </div>
        ) : null}
      </AppHeader>
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
