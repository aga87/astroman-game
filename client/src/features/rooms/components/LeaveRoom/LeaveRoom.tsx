import React, { useContext, useEffect } from 'react';
import { SocketContext } from '../../../../context/SocketContext';
import { useAppSelector, useAppDispatch } from '../../../../redux/typed-hooks';
import { selectRoom } from '../../../../redux/reducers';
import { leaveRoom } from '../../redux/reducers/room';
import { Button } from '../../../../components';

export const LeaveRoom = () => {
  const socket = useContext(SocketContext);
  const room = useAppSelector(selectRoom);
  const dispatch = useAppDispatch();

  const handleLeaveRoomClick = () => {
    socket?.emit('leave_room', room);
  };

  useEffect(() => {
    socket?.on('leave_room_success', () => {
      dispatch(leaveRoom());
    });

    return () => {
      socket?.off('leave_room_success');
    };
  }, [dispatch, socket]);

  return (
    <Button
      variant='primary'
      text='Leave Room'
      handleClick={handleLeaveRoomClick}
    />
  );
};
