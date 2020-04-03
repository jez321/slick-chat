import React, { useState, useRef, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../../redux/app/actions';
import SlickButton from '../SlickButton/SlickButton.component';
import Modal from 'react-modal';

const SetUserModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [hasError, setHasError] = useState(false);
  const userInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userInputRef.current) return;
    const val = userInputRef.current.value;
    if (!val || val.length === 0 || val.length > 30) {
      setHasError(true);
      return;
    }
    dispatch({
      type: SET_USER,
      user: val
    });
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
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      contentLabel="ユーザー名を指定してください">
      <h3 style={{ marginTop: 0, textAlign: 'center' }}>
        ユーザー名を指定してください
      </h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <input
            autoFocus
            ref={userInputRef}
            style={{
              fontSize: '2rem',
              padding: '0.5rem 1rem',
              border: 'solid 1px #999',
              width: '100%'
            }}
            type="text"
          />
        </div>
        {hasError ? (
          <div style={{ color: 'red' }}>
            1~30文字のユーザー名を入力してください。
          </div>
        ) : null}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <SlickButton type="submit">OK</SlickButton>
        </div>
      </form>
    </Modal>
  );
};

export default SetUserModal;
