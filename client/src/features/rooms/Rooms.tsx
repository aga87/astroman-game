import React, { useContext, useEffect } from 'react';
import { SocketContext } from '../../context/SocketContext';
import { useAppDispatch, useAppSelector } from '../../redux/typed-hooks';
import { selectRoom } from '../../redux/reducers';
import { updateRoomSize } from './redux/reducers/room';
import { CreateRoom, JoinRoom } from './components';
import styles from './rooms.module.scss';

type RoomProps = {
  title: string;
  children: React.ReactNode;
};

export const Rooms = ({ children, title }: RoomProps) => {
  const room = useAppSelector(selectRoom);
  const socket = useContext(SocketContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    socket?.on('player_joined', (roomSize: number) => {
      dispatch(updateRoomSize(roomSize));
    });

    socket?.on('player_left', (roomSize: number) => {
      dispatch(updateRoomSize(roomSize));
    });

    return () => {
      socket?.off('player_joined');
      socket?.off('player_left');
    };
  }, [dispatch, socket]);

  return room ? (
    <div>{children}</div>
  ) : (
    <div className={styles.rooms}>
      <h1 className={styles.rooms__heading}>{title}</h1>
      <div className={styles.rooms__create}>
        <CreateRoom />
      </div>
      <p className={styles.rooms__text}>OR</p>
      <JoinRoom />
    </div>
  );
};
