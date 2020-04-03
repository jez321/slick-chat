import { AppState } from './app/types';
import { ChatState } from './chat/types';

export interface RootState {
  app: AppState;
  chat: ChatState;
}
