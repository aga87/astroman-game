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
});

const { PORT } = process.env;
httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
