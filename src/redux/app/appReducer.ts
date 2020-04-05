import { AppState, SetUserAction } from './types';
import { SET_USER } from './actions';

const initialState: AppState = {
  user: '',
};

const appReducer = (state: AppState = initialState, action: SetUserAction) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default appReducer;
