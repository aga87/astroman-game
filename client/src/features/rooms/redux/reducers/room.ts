import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  room: null as null | string,
  roomSize: 0,
  createRoomError: '',
  joinRoomError: ''
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
        roomSize: 1,
        createRoomError: ''
      };
    },
    createRoomError(state, action: PayloadAction<string>) {
      return {
        ...state,
        createRoomError: action.payload
      };
    },
    joinRoom(state, action: PayloadAction<string>) {
      const room = action.payload;
      return {
        ...state,
        room,
        joinRoomError: ''
      };
    },
    joinRoomError(state, action: PayloadAction<string>) {
      return {
        ...state,
        joinRoomError: action.payload
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

export const {
  createRoom,
  createRoomError,
  joinRoom,
  joinRoomError,
  leaveRoom,
  updateRoomSize
} = roomSlice.actions;

// Selectors
export const selectRoom = (state: State): null | string => state.room;
export const selectRoomSize = (state: State): number => state.roomSize;
export const selectCreateRoomError = (state: State): string =>
  state.createRoomError;
export const selectJoinRoomError = (state: State): string =>
  state.joinRoomError;
