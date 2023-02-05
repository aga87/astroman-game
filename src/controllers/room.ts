import { Socket } from 'socket.io';

export const createRoom = (socket: Socket) => {
  socket.on('create_room', roomName => {
    socket.join(roomName);
  });
};
