import React, { useState, useRef, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { setUser } from '../../redux/app/actions';
import SlickButton from '../SlickButton/SlickButton.component';
import {
  SetUserSection,
  SetUserHeader,
  SetUserErrorMessage,
  SetUserInput,
} from './SetUser.styles';

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
    dispatch(setUser(val));
  };
  return (
    <SetUserSection>
      <SetUserHeader>ユーザー名を指定してください</SetUserHeader>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <SetUserInput
            placeholder="ユーザー名"
            autoFocus
            ref={userInputRef}
            type="text"
          />
        </div>
        {hasError ? (
          <SetUserErrorMessage>
            1~30文字のユーザー名を入力してください。
          </SetUserErrorMessage>
        ) : null}
        <SlickButton
          style={{ borderRadius: '5px', marginTop: '1rem' }}
          type="submit">
          <FontAwesomeIcon icon={faSignInAlt} />
          &nbsp;ログイン
        </SlickButton>
      </form>
    </SetUserSection>
  );
};

export default SetUser;
