import React from 'react';
import { Socket } from 'socket.io-client';
import { Button } from '../Button/Button';

type GameRoomProps = {
  roomCode: string;
  socket: Socket;
};

export const GameRoom = ({ roomCode, socket }: GameRoomProps) => {
  const handleLeaveClick = () => {
    socket.emit('leave_room', roomCode);
    // TODO: setIn
  };

  return (
    <div>
      Room {roomCode}
      <Button text="Leave Room" handleClick={handleLeaveClick} />
    </div>
  );
};
