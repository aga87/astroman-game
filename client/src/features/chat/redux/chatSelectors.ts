import { RootState } from '../../../redux/store';

export const selectMessages = (state: RootState): Message[] =>
  state.chatReducer.messages;
