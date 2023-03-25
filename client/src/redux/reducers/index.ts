import { combineReducers } from '@reduxjs/toolkit';
import roomReducer, * as fromRoom from '../../features/rooms/redux/reducers/room';
import gameReducer, * as fromGame from '../../features/game/redux/reducers/game';
import gameUIReducer, * as fromGameUI from '../../features/game/redux/reducers/gameUI';
import type { RootState } from '../store';

export default combineReducers({
  roomReducer,
  gameReducer,
  gameUIReducer
});

// SELECTORS

// Room
export const selectRoom = (state: RootState): null | string =>
  fromRoom.selectRoom(state.roomReducer);
export const selectRoomSize = (state: RootState): number =>
  fromRoom.selectRoomSize(state.roomReducer);
export const selectCreateRoomError = (state: RootState): string =>
  fromRoom.selectCreateRoomError(state.roomReducer);
export const selectJoinRoomError = (state: RootState): string =>
  fromRoom.selectJoinRoomError(state.roomReducer);

// GameUI
export const selectIsGameOptionsModalOpen = (state: RootState): boolean =>
  fromGameUI.selectIsGameOptionsModalOpen(state.gameUIReducer);

// Game
export const selectAvailLetters = (state: RootState): Letter[] =>
  fromGame.selectAvailLetters(state.gameReducer);
export const selectChancesPL1 = (state: RootState): number =>
  fromGame.selectChancesPL1(state.gameReducer);
export const selectChancesPL2 = (state: RootState): number =>
  fromGame.selectChancesPL2(state.gameReducer);
export const selectIsGameOver = (state: RootState): boolean =>
  fromGame.selectIsGameOver(state.gameReducer);
export const selectIsNextTurnPL1 = (state: RootState): boolean =>
  fromGame.selectIsNextTurnPL1(state.gameReducer);
export const selectIsPassAllowed = (state: RootState): boolean =>
  fromGame.selectIsPassAllowed(state.gameReducer);
export const selectIsPL1 = (state: RootState): boolean =>
  fromGame.selectIsPL1(state.gameReducer);
export const selectIsRoundOver = (state: RootState): boolean =>
  fromGame.selectIsRoundOver(state.gameReducer);
export const selectLevel = (state: RootState): number =>
  fromGame.selectLevel(state.gameReducer);
export const selectPointsPL1 = (state: RootState): number =>
  fromGame.selectPointsPL1(state.gameReducer);
export const selectPointsPL2 = (state: RootState): number =>
  fromGame.selectPointsPL2(state.gameReducer);
export const selectRoundProgress = (state: RootState): string =>
  fromGame.selectRoundProgress(state.gameReducer);
export const selectWinner = (state: RootState): string =>
  fromGame.selectWinner(state.gameReducer);
