import { Socket } from 'socket.io-client';
import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/typed-hooks';
import {
  createRoom,
  createRoomError,
  joinRoom,
  joinRoomError,
  leaveRoom,
  updateRoomSize
} from './redux/roomSlice';
import { setPlayer1 } from '../game/redux/gameSlice';

export const useRoomSocket = (socket: Socket) => {
  const dispatch = useAppDispatch();

  // Create room
  useEffect(() => {
    socket.on('create_room_error', (err: string) => {
      dispatch(createRoomError(err));
    });

    socket.on('create_room_success', roomName => {
      dispatch(createRoom(roomName));
      dispatch(setPlayer1());
    });

    return () => {
      socket.off('create_room_error');
      socket.off('create_room_success');
    };
  }, [dispatch, socket]);

  // Join / leave room
  useEffect(() => {
    socket.on('join_room_error', (err: string) => {
      dispatch(joinRoomError(err));
    });

    socket.on('join_room_success', roomName => {
      dispatch(joinRoom(roomName));
    });

    return () => {
      socket.off('join_room_error');
      socket.off('join_room_success');
    };
  }, [dispatch, socket]);

  useEffect(() => {
    socket.on('player_joined', (roomSize: number) => {
      dispatch(updateRoomSize(roomSize));
    });

    socket.on('player_left', (roomSize: number) => {
      dispatch(updateRoomSize(roomSize));
    });

    return () => {
      socket.off('player_joined');
      socket.off('player_left');
    };
  }, [dispatch, socket]);

  // Leave room
  useEffect(() => {
    socket.on('leave_room_success', () => {
      dispatch(leaveRoom());
    });

    return () => {
      socket.off('leave_room_success');
    };
  }, [dispatch, socket]);
};
