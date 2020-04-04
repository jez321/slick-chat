import { AppState } from './app/types';
import { ChatState } from './chat/types';
import { FirebaseReducer } from 'react-redux-firebase';

export interface RootState {
  app: AppState;
  chat: ChatState;
  firebase: FirebaseReducer.Reducer;
}
