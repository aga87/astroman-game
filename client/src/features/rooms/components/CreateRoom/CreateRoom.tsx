import React from 'react';
import { socket } from '../../../../socket';
import { selectCreateRoomError } from '../../../../redux/reducers';
import { Button } from '../../../../components';
import { useAppSelector } from '../../../../redux/typed-hooks';

export const CreateRoom = () => {
  const error = useAppSelector(selectCreateRoomError);

  const handleClick = () => {
    const newRoomName = Math.random()
      .toString(36)
      .substring(2, 5)
      .toUpperCase();

    socket.emit('create_room', newRoomName);
  };

  return (
    <>
      <Button
        variant='primary'
        text='Create New Game'
        handleClick={handleClick}
      />
      {error && <p>Error: {error}</p>}
    </>
  );
};
