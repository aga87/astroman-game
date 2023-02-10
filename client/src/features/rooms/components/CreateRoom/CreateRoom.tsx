import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../../../context/SocketContext';
import { useAppDispatch } from '../../../../redux/typed-hooks';
import { createRoom } from '../../redux/reducers/room';
import { Button } from '../../../../components';

export const CreateRoom = () => {
  const socket = useContext(SocketContext);
  const [roomName, setRoomName] = useState('');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const newRoomName = Math.random()
      .toString(36)
      .substring(2, 5)
      .toUpperCase();

    socket?.emit('create_room', newRoomName);
    setRoomName(newRoomName);
  };

  useEffect(() => {
    socket?.on('create_room_error', err => {
      setError(err);
    });

    socket?.on('create_room_success', () => {
      setError('');
      dispatch(createRoom(roomName));
    });

    return () => {
      socket?.off('create_room_error');
      socket?.off('create_room_success');
    };
  }, [dispatch, socket, roomName]);

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
