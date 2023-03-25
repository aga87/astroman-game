import { useContext, useEffect } from 'react';
import { SocketContext } from '../../context/SocketContext';
import { useAppDispatch } from '../../redux/typed-hooks';
import { receiveMessage } from './redux/reducers/chat';

export const useChatSocket = () => {
  const socket = useContext(SocketContext);
  const dispatch = useAppDispatch();

  // Receive message
  useEffect(() => {
    socket?.on('player_sent_message', (message: Message) => {
      dispatch(receiveMessage(message));
    });

    return () => {
      socket?.off('player_sent_message');
    };
  }, [dispatch, socket]);
};
