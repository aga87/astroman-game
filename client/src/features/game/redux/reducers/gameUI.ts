import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isGameOptionsModalOpen: false
};

type State = typeof initialState;

const gameUISlice = createSlice({
  name: 'gameUI',
  initialState,
  reducers: {
    openGameOptionsModal(state) {
      return {
        ...state,
        isGameOptionsModalOpen: true
      };
    },
    closeGameOptionsModal(state) {
      return {
        ...state,
        isGameOptionsModalOpen: false
      };
    }
  }
});

export default gameUISlice.reducer;

export const { openGameOptionsModal, closeGameOptionsModal } =
  gameUISlice.actions;

// Selectors
export const selectIsGameOptionsModalOpen = (state: State): boolean =>
  state.isGameOptionsModalOpen;
