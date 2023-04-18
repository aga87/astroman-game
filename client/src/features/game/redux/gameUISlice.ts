import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isGameOptionsModalOpen: false
};

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
