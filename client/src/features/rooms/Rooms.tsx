import React from 'react';
import { CreateRoom, JoinRoom } from './components';

type RoomProps = {
  title: string;
};

export const Rooms = ({ title }: RoomProps) => {
  return (
    <>
      <h1>{title}</h1>
      <CreateRoom />
      <JoinRoom />
    </>
  );
};
