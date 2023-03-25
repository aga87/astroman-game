import React from 'react';
// import { io } from 'socket.io-client';
// import { SocketContext } from './context/SocketContext';
import { socket } from './socket';
import { useAppSelector } from './redux/typed-hooks';
import { selectIsChatOpen } from './redux/reducers';
import { Chat, Game, Rooms } from './features';
// import { useChatSocket } from './features/chat/useChatSocket';
// import { useGameSocket } from './features/game/useGameSocket';
import { useRoomSocket } from './features/rooms/useRoomSocket';
import styles from './app.module.scss';

export const App = () => {
  // const socket = io(
  //   process.env.REACT_APP_SOCKET_SERVER || 'http://localhost:5000'
  // );

  const isChatOpen = useAppSelector(selectIsChatOpen);

  // https://deepinder.me/creating-a-real-time-chat-application-with-react-hooks-socket-io-and-nodejs

  // useChatSocket();
  // useGameSocket();
  useRoomSocket(socket);

  return (
    // <SocketContext.Provider value={socket}>
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
    // </SocketContext.Provider>
  );
};
