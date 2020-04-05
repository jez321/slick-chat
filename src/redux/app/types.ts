import { SET_USER } from './actions';
import { Action } from 'redux';

export interface AppState {
  user: string;
}

export interface SetUserAction extends Action {
  type: typeof SET_USER;
  user: string;
}
