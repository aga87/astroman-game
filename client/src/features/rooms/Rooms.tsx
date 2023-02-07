import React from 'react';
import { useAppSelector } from '../../redux/typed-hooks';
import { selectRoom } from '../../redux/reducers';
import { CreateRoom, JoinRoom, LeaveRoom } from './components';

import styles from './rooms.module.scss';

type RoomProps = {
  title: string;
  children: React.ReactNode;
};

export const Rooms = ({ children, title }: RoomProps) => {
  const room = useAppSelector(selectRoom);

  return room ? (
    <div>
      <div className={styles.roomInfo}>
        <p className={styles.roomInfo__text}>Room {room}</p>
        <LeaveRoom />
      </div>
      {children}
    </div>
  ) : (
    <>
      <h1>{title}</h1>
      <CreateRoom />
      <JoinRoom />
    </>
  );
};
