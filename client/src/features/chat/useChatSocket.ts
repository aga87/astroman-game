import { Socket } from 'socket.io-client';
import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/typed-hooks';
import { receiveMessage } from './redux/chatSlice';

export const useChatSocket = (socket: Socket) => {
  const dispatch = useAppDispatch();

  // Receive message
  useEffect(() => {
    socket.on('player_sent_message', (message: Message) => {
      dispatch(receiveMessage(message));
    });

    return () => {
      socket.off('player_sent_message');
    };
  }, [dispatch, socket]);
};
