import { combineReducers } from 'redux';
import appReducer from './app/appReducer';
import chatReducer from './chat/chatReducer';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  app: appReducer,
  chat: chatReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
