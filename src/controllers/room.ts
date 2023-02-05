import { Socket, Server } from 'socket.io';

export const createRoom = (socket: Socket) => {
  socket.on('create_room', roomName => {
    socket.join(roomName);
  });
};

export const joinRoom = (socket: Socket, io: Server) => {
  socket.on('join_room', (roomName: string) => {
    const room = io.sockets.adapter.rooms.get(roomName);

    if (!room) {
      socket.emit('join_room_error', 'Room not found');
    } else if (room.size === 2) {
      socket.emit('join_room_error', 'Room is full');
    } else {
      socket.join(roomName);
      socket.emit('join_room_success');
    }
  });
};
