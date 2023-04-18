import React from 'react';
import { useAppSelector } from '../../redux/typed-hooks';
import { selectIsGameOptionsModalOpen } from './redux/gameUISelectors';
import {
  selectIsGameOver,
  selectIsPL1,
  selectIsNextTurnPL1
} from './redux/gameSelectors';
import { selectRoomSize } from '../rooms/redux/roomSelectors';
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
  PlayerStopper,
  RoundProgress,
  StartBtn
} from './components';
import styles from './game.module.scss';

export const Game = () => {
  const isGameOptionsModalOpen = useAppSelector(selectIsGameOptionsModalOpen);
  const isGameOver = useAppSelector(selectIsGameOver);
  const isPL1 = useAppSelector(selectIsPL1);
  const isNextTurnPL1 = useAppSelector(selectIsNextTurnPL1);
  const roomSize = useAppSelector(selectRoomSize);

  const isScreenLocked = (isPL1 && !isNextTurnPL1) || (!isPL1 && isNextTurnPL1);
  const isPL1InTheRoom = roomSize === 2 || (roomSize === 1 && isPL1);
  const isPL2InTheRoom = roomSize === 2 || (roomSize === 1 && !isPL1);

  return (
    <>
      {isScreenLocked && <PlayerStopper />}
      {isGameOptionsModalOpen && <GameOptionsModal />}
      {isGameOver && <GameOverModal />}
      <div className={styles.game}>
        <div className={styles.game__header}>
          <Header />
          <Menu />
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
          {isPL1InTheRoom && (
            <Player1Canvas>
              <Player1Points />
            </Player1Canvas>
          )}
        </div>
        <div className={styles.game__player2}>
          {isPL2InTheRoom && (
            <Player2Canvas>
              <Player2Points />
            </Player2Canvas>
          )}
        </div>
      </div>
    </>
  );
};
