import React from 'react';
import { useAppSelector } from '../../redux/typed-hooks';
import { selectIsGameOptionsModalOpen } from '../../redux/reducers';
import {
  GameOptionsModal,
  Header,
  Letters,
  Level,
  Menu,
  PassBtn,
  Player1Canvas,
  Player2Canvas,
  Player1Points,
  Player2Points,
  QuitBtn,
  ResetBtn,
  RoundProgress,
  StartBtn
} from './components';
import styles from './game.module.scss';

export const Game = () => {
  const IsGameOptionsModalOpen = useAppSelector(selectIsGameOptionsModalOpen);

  return (
    <>
      {IsGameOptionsModalOpen && (
        <GameOptionsModal>
          <ResetBtn />
          <QuitBtn />
        </GameOptionsModal>
      )}
      <div className={styles.game}>
        <div className={styles.game__header}>
          <Header>
            <Menu />
          </Header>
        </div>
        <div className={styles.game__level}>
          <Level />
          <StartBtn />
        </div>
        <div className={styles.game__roundProgress}>
          <RoundProgress />
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
          <Player2Canvas>
            <Player2Points />
          </Player2Canvas>
        </div>
      </div>
    </>
  );
};
