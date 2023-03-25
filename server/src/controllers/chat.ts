import { Socket } from 'socket.io';

type Player = 'Player 1' | 'Player 2';

type Message = {
  body: string;
  sender: Player;
};

export const sendMessage = (socket: Socket) => {
  socket.on(
    'send_message',
    ({ room, message }: { room: string; message: Message }) => {
      // To all clients in the room except the sender
      socket.in(room).emit('player_sent_message', message);
    }
  );
};
