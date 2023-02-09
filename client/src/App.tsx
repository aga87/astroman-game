import React from 'react';
import { io } from 'socket.io-client';
import { SocketContext } from './context/SocketContext';
import { Game, Rooms } from './features';

export const App = () => {
  const socket = io('http://localhost:5000');

  return (
    <SocketContext.Provider value={socket}>
      <Rooms title='Astroman Multiplayer'>
        <Game />
      </Rooms>
    </SocketContext.Provider>
  );
};
