import { combineReducers } from '@reduxjs/toolkit';
import { Socket } from 'socket.io-client';
import socketReducer, * as fromSocket from './socket';
import type { RootState } from '../store';

export default combineReducers({
  socketReducer
});

// SELECTORS

// Socket
export const selectSocket = (state: RootState): Socket =>
  fromSocket.selectSocket(state.socketReducer);
