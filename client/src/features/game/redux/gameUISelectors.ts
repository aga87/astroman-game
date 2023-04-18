import type { RootState } from '../../../redux/store';

export const selectIsGameOptionsModalOpen = (state: RootState): boolean =>
  state.gameUIReducer.isGameOptionsModalOpen;
