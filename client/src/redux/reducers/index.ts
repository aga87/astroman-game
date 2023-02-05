import { combineReducers } from '@reduxjs/toolkit';
import { Socket } from 'socket.io-client';
import socketReducer, * as fromSocket from './socket';
import roomReducer, * as fromRoom from '../../features/rooms/redux/reducers/room';
import type { RootState } from '../store';

export default combineReducers({
  socketReducer,
  roomReducer
});

// SELECTORS

// Socket
export const selectSocket = (state: RootState): Socket =>
  fromSocket.selectSocket(state.socketReducer);

// Room
export const selectRoom = (state: RootState): null | string =>
  fromRoom.selectRoom(state.roomReducer);
