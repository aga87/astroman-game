import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  room: null as null | string,
  roomSize: 0
};

type State = typeof initialState;

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    createRoom(state, action: PayloadAction<string>) {
      const room = action.payload;
      return {
        ...state,
        room,
        roomSize: 1
      };
    },
    joinRoom(state, action: PayloadAction<string>) {
      const room = action.payload;
      return {
        ...state,
        room
      };
    },
    updateRoomSize(state, action: PayloadAction<number>) {
      const roomSize = action.payload;
      return {
        ...state,
        roomSize
      };
    },
    leaveRoom() {
      return initialState;
    }
  }
});

export default roomSlice.reducer;

export const { createRoom, joinRoom, leaveRoom, updateRoomSize } =
  roomSlice.actions;

// Selectors
export const selectRoom = (state: State): null | string => state.room;
export const selectRoomSize = (state: State): number => state.roomSize;
