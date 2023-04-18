import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isChatOpen: false
};

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
