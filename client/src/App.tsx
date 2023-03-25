import React from 'react';
import { socket } from './socket';
import { useAppSelector } from './redux/typed-hooks';
import { selectIsChatOpen } from './redux/reducers';
import { Chat, Game, Rooms, useGameSocket, useRoomSocket } from './features';
import styles from './app.module.scss';

export const App = () => {
  const isChatOpen = useAppSelector(selectIsChatOpen);

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
