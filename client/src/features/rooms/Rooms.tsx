import React from 'react';
import { useAppSelector } from '../../redux/typed-hooks';
import { selectRoom } from '../../redux/reducers';
import { CreateRoom, JoinRoom, LeaveRoom, Room } from './components';

type RoomProps = {
  title: string;
  children: React.ReactNode;
};

export const Rooms = ({ children, title }: RoomProps) => {
  const room = useAppSelector(selectRoom);

  return room ? (
    <Room>
      <LeaveRoom />
      {children}
    </Room>
  ) : (
    <>
      <h1>{title}</h1>
      <CreateRoom />
      <JoinRoom />
    </>
  );
};
