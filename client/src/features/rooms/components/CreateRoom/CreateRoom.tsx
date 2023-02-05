import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/typed-hooks';
import { selectSocket } from '../../../../redux/reducers';
import { joinRoom } from '../../redux/reducers/room';
import { Button } from '../../../../components';

export const CreateRoom = () => {
  const socket = useAppSelector(selectSocket);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const newRoomName = Math.random()
      .toString(36)
      .substring(2, 5)
      .toUpperCase();

    socket.emit('create_room', newRoomName);

    dispatch(joinRoom(newRoomName));
  };

  return <Button text='Create New Game' handleClick={handleClick} />;
};
