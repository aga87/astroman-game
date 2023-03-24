import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isChatOpen: false
};

type State = typeof initialState;

const chatUISlice = createSlice({
  name: 'chatUI',
  initialState,
  reducers: {
    toggleChat(state) {
      return {
        ...state,
        isChatOpen: !state.isChatOpen
      };
    }
  }
});

export default chatUISlice.reducer;

export const { toggleChat } = chatUISlice.actions;

// Selectors
export const selectIsChatOpen = (state: State): boolean => state.isChatOpen;
