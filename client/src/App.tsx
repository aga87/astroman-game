import React from 'react';
import { io } from 'socket.io-client';

const socket = io();

export const App = () => {
  return <h1>Astroman</h1>;
};
