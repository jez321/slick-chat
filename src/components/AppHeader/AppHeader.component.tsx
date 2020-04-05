import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AppHeaderWrapper } from './AppHeader.styles';

type AppHeaderProps = {
  user: string;
};
const AppHeader = ({ user }: AppHeaderProps) => {
  return (
    <AppHeaderWrapper>
      <h1>SlickChat</h1>
      {user ? (
        <div>
          <FontAwesomeIcon icon={faUser} />
          &nbsp;{user}
        </div>
      ) : null}
    </AppHeaderWrapper>
  );
};

export default AppHeader;
