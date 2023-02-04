import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

dotenv.config();
const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

const httpServer = createServer(app);

const io = new Server(httpServer, {
  /* options */
});

io.on('connection', socket => {
  console.log('socket connected', socket.id);
  socket.on('disconnect', () => {
    console.log('socket disconnected', socket.id);
  });

  socket.on('create_room', roomCode => {
    socket.join(roomCode);
  });

  socket.on('join_room', roomCode => {
    const room = io.sockets.adapter.rooms.get(roomCode);

    if (!room) {
      socket.emit('join_room_error', 'Room not found');
    } else if (room.size === 2) {
      socket.emit('join_room_error', 'Room is full');
    } else {
      socket.join(roomCode);
      socket.emit('join_room_success');
    }
  });

  socket.on('leave_room', roomCode => {
    socket.leave(roomCode);
  });
});

const { PORT } = process.env;
httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
