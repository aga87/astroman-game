import React from 'react';
import { useAppSelector } from '../../redux/typed-hooks';
import {
  selectIsGameOptionsModalOpen,
  selectIsGameOver,
  selectRoomSize
} from '../../redux/reducers';
import {
  GameOptionsModal,
  GameOverModal,
  Header,
  Letters,
  Level,
  Menu,
  PassBtn,
  Player1Canvas,
  Player2Canvas,
  Player1Points,
  Player2Points,
  RoundProgress,
  StartBtn
} from './components';
import styles from './game.module.scss';

export const Game = () => {
  const isGameOptionsModalOpen = useAppSelector(selectIsGameOptionsModalOpen);
  const isGameOver = useAppSelector(selectIsGameOver);
  const roomSize = useAppSelector(selectRoomSize);

  return (
    <>
      {isGameOptionsModalOpen && <GameOptionsModal />}
      {isGameOver && <GameOverModal />}
      <div className={styles.game}>
        <div className={styles.game__header}>
          <Header>
            <Menu />
          </Header>
        </div>
        <div className={styles.game__level}>
          {roomSize === 1 ? (
            'Waiting for the second player to join...'
          ) : (
            <>
              <Level />
              <StartBtn />
            </>
          )}
        </div>
        <div className={styles.game__roundProgress}>
          {roomSize === 2 && <RoundProgress />}
        </div>
        <div className={styles.game__letters}>
          <Letters />
          <PassBtn />
        </div>

        <div className={styles.game__player1}>
          <Player1Canvas>
            <Player1Points />
          </Player1Canvas>
        </div>
        <div className={styles.game__player2}>
          {roomSize === 2 && (
            <Player2Canvas>
              <Player2Points />
            </Player2Canvas>
          )}
        </div>
      </div>
    </>
  );
};
