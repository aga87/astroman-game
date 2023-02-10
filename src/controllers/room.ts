import { Socket, Server } from 'socket.io';

export const createRoom = (socket: Socket, io: Server) => {
  socket.on('create_room', roomName => {
    const room = io.sockets.adapter.rooms.get(roomName);
    if (room) {
      socket.emit('create_room_error', 'Room already exists');
    } else {
      socket.join(roomName);
      socket.emit('create_room_success');
    }
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

export const leaveRoom = (socket: Socket, io: Server) => {
  socket.on('leave_room', (roomName: string) => {
    const room = io.sockets.adapter.rooms.get(roomName);
    if (!room) {
      socket.emit('leave_room_error', 'Room does not exist');
    } else {
      socket.leave(roomName);
      socket.emit('leave_room_success');
    }
  });
};
