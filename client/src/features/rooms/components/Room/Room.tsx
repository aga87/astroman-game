import React from 'react';
import { useAppSelector } from '../../../../redux/typed-hooks';
import { selectRoom } from '../../../../redux/reducers';

type RoomProps = {
  children: React.ReactNode;
};

export const Room = ({ children }: RoomProps) => {
  const room = useAppSelector(selectRoom);

  return (
    <div>
      Room {room}
      {children}
    </div>
  );
};
