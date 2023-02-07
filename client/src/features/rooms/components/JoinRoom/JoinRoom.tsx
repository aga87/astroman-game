import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/typed-hooks';
import { selectSocket } from '../../../../redux/reducers';
import { joinRoom } from '../../redux/reducers/room';
import { Button, TextInput, useTextInput } from '../../../../components';

export const JoinRoom = () => {
  const socket = useAppSelector(selectSocket);
  const dispatch = useAppDispatch();
  const joinRoomCode = useTextInput('');
  const [error, setError] = useState('');

  const handleJoinGameClick = () => {
    socket.emit('join_room', joinRoomCode.value);

    socket.on('join_room_error', joinError => {
      setError(joinError);
    });

    socket.on('join_room_success', () => {
      setError('');
      dispatch(joinRoom(joinRoomCode.value));
    });
  };

  return (
    <>
      <TextInput
        value={joinRoomCode.value}
        placeholder='Enter room code'
        handleChange={joinRoomCode.handleChange}
      />
      <Button
        variant='primary'
        text='Join Game'
        handleClick={handleJoinGameClick}
      />
      {error && <p>Error: {error}</p>}
    </>
  );
};
