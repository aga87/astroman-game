import React, { useState } from 'react';
import { io } from 'socket.io-client';
import { Button, GameRoom, TextInput, useTextInput } from './components';

const socket = io();

export const App = () => {
  const [roomCode, setRoomCode] = useState('');
  const joinRoomCode = useTextInput('');
  const [isInRoom, setIsInRoom] = useState(false);
  const [error, setError] = useState('');

  const handleCreateNewGameClick = () => {
    // Generate a unique room code
    const newRoomCode = Math.random()
      .toString(36)
      .substring(2, 5)
      .toUpperCase();
    // Emit a "create room" event to the server
    socket.emit('create_room', newRoomCode);
    // Update the room code state
    setRoomCode(newRoomCode);
    setIsInRoom(true);
  };

  const handleJoinGameClick = () => {
    // Emit a "join room" event to the server
    socket.emit('join_room', joinRoomCode.value);

    // Listen for the error message
    socket.on('join_room_error', error => {
      setError(error);
    });

    // Listen for a success message
    socket.on('join_room_success', () => {
      setIsInRoom(true);
      setError('');
    });
  };

  if (isInRoom)
    return (
      <GameRoom roomCode={roomCode || joinRoomCode.value} socket={socket} />
    );
  return (
    <>
      <h1>Astroman Multiplayer</h1>
      <Button text="Create New Game" handleClick={handleCreateNewGameClick} />
      <TextInput
        value={joinRoomCode.value}
        placeholder="Enter room code"
        handleChange={joinRoomCode.handleChange}
      />

      <Button text="Join Game" handleClick={handleJoinGameClick} />
      {error && <p>Error: {error}</p>}
    </>
  );
};
