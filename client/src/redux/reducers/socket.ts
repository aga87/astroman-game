import { createSlice } from '@reduxjs/toolkit';
import { io, Socket } from 'socket.io-client';

const initialState = {
  socket: io()
};

type State = typeof initialState;

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {}
});

export default socketSlice.reducer;

// Selectors
export const selectSocket = (state: State): Socket => state.socket;
