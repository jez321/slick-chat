import { SET_USER } from './actions';
import { AppState } from './types';

interface SET_USER_ACTION {
  type: typeof SET_USER;
  user: string;
}
const initialState: AppState = {
  user: ''
};

const appReducer = (
  state: AppState = initialState,
  action: SET_USER_ACTION
) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default appReducer;
