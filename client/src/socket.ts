import { io } from 'socket.io-client';

export const socket = io(
  process.env.REACT_APP_SOCKET_SERVER || 'http://localhost:5000'
);