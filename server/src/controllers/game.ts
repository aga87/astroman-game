import { Socket } from 'socket.io';

export const startGame = (socket: Socket) => {
  socket.on(
    'start_game',
    ({ room, randomBook }: { room: string; randomBook: string }) => {
      // To all clients in the room except the sender
      socket.in(room).emit('player_started_game', randomBook);
    }
  );
};

export const makeMove = (socket: Socket) => {
  socket.on(
    'make_move',
    ({ room, letter }: { room: string; letter: string }) => {
      // To all clients in the room except the sender
      socket.in(room).emit('player_made_move', letter);
    }
  );
};

export const passTurn = (socket: Socket) => {
  socket.on('pass_turn', (room: string) => {
    // To all clients in the room except the sender
    socket.in(room).emit('player_passed_turn');
  });
};

export const resetGame = (socket: Socket) => {
  socket.on('reset_game', (room: string) => {
    // To all clients in the room except the sender
    socket.in(room).emit('player_reset_game');
  });
};
