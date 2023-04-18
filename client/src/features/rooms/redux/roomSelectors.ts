import type { RootState } from '../../../redux/store';

export const selectRoom = (state: RootState): null | string =>
  state.roomReducer.room;

export const selectRoomSize = (state: RootState): number =>
  state.roomReducer.roomSize;

export const selectCreateRoomError = (state: RootState): string =>
  state.roomReducer.createRoomError;

export const selectJoinRoomError = (state: RootState): string =>
  state.roomReducer.joinRoomError;
