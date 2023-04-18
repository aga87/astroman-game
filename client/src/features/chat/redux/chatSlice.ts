import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  messages: [] as Message[]
};

type State = typeof initialState;

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage(state: State, action: PayloadAction<Message>) {
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    },
    receiveMessage(state: State, action: PayloadAction<Message>) {
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    }
  }
});

export default chatSlice.reducer;

export const { receiveMessage, sendMessage } = chatSlice.actions;
