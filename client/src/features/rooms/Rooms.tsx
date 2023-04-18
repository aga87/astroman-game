import React from 'react';
import { useAppSelector } from '../../redux/typed-hooks';
import { selectRoom } from './redux/roomSelectors';
import { CreateRoom, JoinRoom } from './components';
import styles from './rooms.module.scss';

type RoomProps = {
  title: string;
  children: React.ReactNode;
};

export const Rooms = ({ children, title }: RoomProps) => {
  const room = useAppSelector(selectRoom);

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
