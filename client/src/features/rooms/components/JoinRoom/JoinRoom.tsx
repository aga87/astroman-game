import React from 'react';
import { socket } from '../../../../socket';
import { useAppSelector } from '../../../../redux/typed-hooks';
import { selectJoinRoomError } from '../../../../redux/reducers';
import { Button, TextInput, useTextInput } from '../../../../components';
import styles from './joinRoom.module.scss';

export const JoinRoom = () => {
  const joinRoomCode = useTextInput('');
  const error = useAppSelector(selectJoinRoomError);

  const handleJoinGameClick = () => {
    socket.emit('join_room', joinRoomCode.value.trim());
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <TextInput
          value={joinRoomCode.value.trim()}
          placeholder='Enter room code'
          handleChange={joinRoomCode.handleChange}
        />
      </div>
      <Button
        variant='primary'
        text='Join Game'
        handleClick={handleJoinGameClick}
      />
      {error && <p>Error: {error}</p>}
    </>
  );
};
