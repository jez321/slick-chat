import React from 'react';
import { SlickButtonWrapper } from './SlickButton.styles';

const SlickButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <SlickButtonWrapper {...props}></SlickButtonWrapper>;
};

export default SlickButton;
