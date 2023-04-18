import { combineReducers } from '@reduxjs/toolkit';
import chatReducer from '../../features/chat/redux/chatSlice';
import chatUIReducer from '../../features/chat/redux/chatUISlice';
import gameReducer from '../../features/game/redux/gameSlice';
import gameUIReducer from '../../features/game/redux/gameUISlice';
import roomReducer from '../../features/rooms/redux/roomSlice';

export default combineReducers({
  roomReducer,
  gameReducer,
  gameUIReducer,
  chatReducer,
  chatUIReducer
});
