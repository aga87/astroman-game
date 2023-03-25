import React from 'react';
import { socket } from './socket';
import { Game, Rooms, useGameSocket, useRoomSocket } from './features';

export const App = () => {
  useGameSocket(socket);
  useRoomSocket(socket);

  return (
    <Rooms title='Astroman Multiplayer'>
      <Game />
    </Rooms>
  );
};
