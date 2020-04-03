import React, { useState } from 'react';
import { AppWrapper, AppHeader } from './App.styles';
import ChatInput from './components/ChatInput/ChatInput.component';
import ChatHistory from './components/ChatHistory/ChatHistory.component';
import SlickButton from './components/SlickButton/SlickButton.component';
import Modal from 'react-modal';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const customStyles = {
    content: {
      top: '20%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '2rem'
    }
  };
  return (
    <AppWrapper>
      <AppHeader>
        <h1>SlickChat</h1>
        <div>UserName</div>
      </AppHeader>
      <ChatHistory></ChatHistory>
      <ChatInput></ChatInput>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        contentLabel="ユーザー名を指定してください">
        <h3 style={{ marginTop: 0 }}>ユーザー名を指定してください</h3>
        <form>
          <div style={{ marginBottom: '2rem' }}>
            <input
              style={{
                fontSize: '2rem',
                padding: '0.5rem 1rem',
                border: 'solid 1px #999'
              }}
              type="text"
            />
          </div>

          <SlickButton type="submit" onClick={closeModal}>
            OK
          </SlickButton>
        </form>
      </Modal>
    </AppWrapper>
  );
}

export default App;
