import { combineReducers } from 'redux';
import appReducer from './app/appReducer';
import chatReducer from './chat/chatReducer';

const rootReducer = combineReducers({
  app: appReducer,
  chat: chatReducer
});

export default rootReducer;
