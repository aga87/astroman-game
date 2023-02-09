import React, { useContext } from 'react';
import { SocketContext } from '../../../../context/SocketContext';
import { useAppDispatch } from '../../../../redux/typed-hooks';
import { joinRoom } from '../../redux/reducers/room';
import { Button } from '../../../../components';

export const CreateRoom = () => {
  const socket = useContext(SocketContext);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const newRoomName = Math.random()
      .toString(36)
      .substring(2, 5)
      .toUpperCase();

    socket?.emit('create_room', newRoomName);

    dispatch(joinRoom(newRoomName));
  };

  return (
    <Button
      variant='primary'
      text='Create New Game'
      handleClick={handleClick}
    />
  );
};
