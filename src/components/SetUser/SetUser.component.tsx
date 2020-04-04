import React, { useState, useRef, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../../redux/app/actions';
import SlickButton from '../SlickButton/SlickButton.component';
import { SetUserSection } from './SetUser.styles';

const SetUser = () => {
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
      user: val,
    });
  };
  const customStyles = {
    content: {
      top: '20%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '2rem',
    },
  };
  return (
    <SetUserSection>
      <h3 style={{ marginTop: 0, textAlign: 'center' }}>
        ユーザー名を指定してください
      </h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
          <input
            autoFocus
            ref={userInputRef}
            style={{
              fontSize: '2rem',
              padding: '1rem',
              border: 'solid 1px #999',
              borderRadius: '5px',
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
          <SlickButton style={{ borderRadius: '5px' }} type="submit">
            ログイン
          </SlickButton>
        </div>
      </form>
    </SetUserSection>
  );
};

export default SetUser;
