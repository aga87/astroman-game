import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { createRoom, joinRoom, leaveRoom } from './controllers/room';
import { startGame, makeMove, passTurn, resetGame } from './controllers/game';

dotenv.config();
const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

const httpServer = createServer(app);

const origin =
  process.env.NODE_ENV === 'production'
    ? process.env.CORS_ORIGIN_PROD
    : process.env.CORS_ORIGIN_DEV;

const io = new Server(httpServer, {
  cors: {
    origin: origin || 'http://localhost:3000'
  }
});

io.on('connection', socket => {
  console.log('socket connected', socket.id);

  // Rooms
  createRoom(socket, io);
  joinRoom(socket, io);
  leaveRoom(socket, io);
  // Game
  startGame(socket);
  makeMove(socket);
  passTurn(socket);
  resetGame(socket);

  socket.on('disconnect', () => {
    console.log('socket disconnected', socket.id);
  });
});

const { PORT } = process.env;
httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
