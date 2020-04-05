import { SetUserAction } from './types';

export const SET_USER = 'SET_USER';

export const setUser = (user: string): SetUserAction => ({
  type: SET_USER,
  user,
});
