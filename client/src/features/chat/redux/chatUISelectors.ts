import { RootState } from '../../../redux/store';

export const selectIsChatOpen = (state: RootState): boolean =>
  state.chatUIReducer.isChatOpen;
