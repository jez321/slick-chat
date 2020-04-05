import { combineReducers } from 'redux';
import appReducer from './app/appReducer';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  app: appReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
