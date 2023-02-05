import React from 'react';
import { Button } from '../../../../components';
import { useAppSelector, useAppDispatch } from '../../../../redux/typed-hooks';
import { selectSocket, selectRoom } from '../../../../redux/reducers';
import { leaveRoom } from '../../redux/reducers/room';

export const LeaveRoom = () => {
  const socket = useAppSelector(selectSocket);
  const room = useAppSelector(selectRoom);
  const dispatch = useAppDispatch();

  const handleLeaveRoomClick = () => {
    socket.emit('leave_room', room);
    dispatch(leaveRoom());
  };

  return <Button text='Leave Room' handleClick={handleLeaveRoomClick} />;
};
