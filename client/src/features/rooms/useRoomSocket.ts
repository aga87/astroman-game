import { Socket } from 'socket.io-client';
import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/typed-hooks';
import { updateRoomSize } from './redux/reducers/room';

export const useRoomSocket = (socket: Socket) => {
  const dispatch = useAppDispatch();

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
};
