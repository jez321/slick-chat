import { POST_MESSAGE } from './actions';
import { ChatState } from './types';

interface POST_MESSAGE_ACTION {
  type: typeof POST_MESSAGE;
  text: string;
}
const initialState: ChatState = {
  messages: []
};

const chatReducer = (
  state: ChatState = initialState,
  action: POST_MESSAGE_ACTION
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default chatReducer;
