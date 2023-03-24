import React from 'react';
import { io } from 'socket.io-client';
import { SocketContext } from './context/SocketContext';
import { useAppSelector } from './redux/typed-hooks';
import { selectIsChatOpen } from './redux/reducers';
import { Chat, Game, Rooms } from './features';
import styles from './app.module.scss';

export const App = () => {
  const socket = io(
    process.env.REACT_APP_SOCKET_SERVER || 'http://localhost:5000'
  );

  const isChatOpen = useAppSelector(selectIsChatOpen);

  return (
    <SocketContext.Provider value={socket}>
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
    </SocketContext.Provider>
  );
};
