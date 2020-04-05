import { AppState } from './app/types';
import { FirebaseReducer } from 'react-redux-firebase';

export type Message = {
  text: string;
  timestamp: number;
  user: string;
  [name: string]: any;
};
export interface RootState {
  app: AppState;
  firebase: FirebaseReducer.Reducer<string, Message>;
}
