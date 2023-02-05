import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  room: null as null | string
};

type State = typeof initialState;

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    joinRoom(state, action: PayloadAction<string>) {
      const room = action.payload;
      return {
        ...state,
        room
      };
    },
    leaveRoom(state) {
      return {
        ...state,
        room: null
      };
    }
  }
});

export default roomSlice.reducer;

export const { joinRoom, leaveRoom } = roomSlice.actions;

// Selectors
export const selectRoom = (state: State): null | string => state.room;
