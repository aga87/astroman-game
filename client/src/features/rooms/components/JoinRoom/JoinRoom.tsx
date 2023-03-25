import React, { useEffect, useState } from 'react';
// import { SocketContext } from '../../../../context/SocketContext';
import { socket } from '../../../../socket';
import { useAppDispatch } from '../../../../redux/typed-hooks';
import { joinRoom } from '../../redux/reducers/room';
import { Button, TextInput, useTextInput } from '../../../../components';
import styles from './joinRoom.module.scss';

export const JoinRoom = () => {
  // const socket = useContext(SocketContext);
  const dispatch = useAppDispatch();
  const joinRoomCode = useTextInput('');
  const [error, setError] = useState('');

  // const handleJoinGameClick = () => {
  //   socket?.emit('join_room', joinRoomCode.value.trim());
  // };

  // useEffect(() => {
  //   socket?.on('join_room_error', joinError => {
  //     setError(joinError);
  //   });

  //   socket?.on('join_room_success', () => {
  //     setError('');
  //     dispatch(joinRoom(joinRoomCode.value.trim()));
  //   });

  //   return () => {
  //     socket?.off('join_room_error');
  //     socket?.off('join_room_success');
  //   };
  // }, [dispatch, socket, joinRoomCode.value]);

  const handleJoinGameClick = () => {
    socket.emit('join_room', joinRoomCode.value.trim());
  };

  useEffect(() => {
    socket.on('join_room_error', joinError => {
      setError(joinError);
    });

    socket.on('join_room_success', () => {
      setError('');
      dispatch(joinRoom(joinRoomCode.value.trim()));
    });

    return () => {
      socket.off('join_room_error');
      socket.off('join_room_success');
    };
  }, [dispatch, socket, joinRoomCode.value]);

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
