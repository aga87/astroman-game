import React from 'react';
import { socket } from '../../../../socket';
import { useAppSelector } from '../../../../redux/typed-hooks';
import { selectRoom } from '../../../../redux/reducers';
import { Button } from '../../../../components';

export const LeaveRoom = () => {
  const room = useAppSelector(selectRoom);

  const handleLeaveRoomClick = () => {
    socket.emit('leave_room', room);
  };

  return (
    <Button
      variant='primary'
      text='Leave Room'
      handleClick={handleLeaveRoomClick}
    />
  );
};
