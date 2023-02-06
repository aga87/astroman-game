import React from 'react';
import { Game, Rooms } from './features';

export const App = () => {
  return (
    <Rooms title='Astroman Multiplayer'>
      <Game />
    </Rooms>
  );
};
