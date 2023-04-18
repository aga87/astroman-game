import React from 'react';
import { socket } from './socket';
import { useAppSelector } from './redux/typed-hooks';
import { selectIsChatOpen } from './features/chat/redux/chatUISelectors';
import {
  Chat,
  Game,
  Rooms,
  useChatSocket,
  useGameSocket,
  useRoomSocket
} from './features';
import styles from './app.module.scss';

export const App = () => {
  const isChatOpen = useAppSelector(selectIsChatOpen);

  useChatSocket(socket);
  useGameSocket(socket);
  useRoomSocket(socket);

  return (
    <Rooms title='Astroman Multiplayer'>
      <div className={styles.container}>
        <Game />
        {isChatOpen && (
          <div className={styles.container__chat}>
            <Chat />
          </div>
        )}
      </div>
    </Rooms>
  );
};
