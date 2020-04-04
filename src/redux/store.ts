import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
const firebaseReducerConfig = {
  userProfile: 'users',
};
export const firebaseReducerProps = {
  firebase,
  config: firebaseReducerConfig,
  dispatch: store.dispatch,
};
