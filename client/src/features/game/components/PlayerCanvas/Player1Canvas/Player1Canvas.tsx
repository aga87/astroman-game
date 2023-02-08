import React, { useRef, useEffect } from 'react';
import { useAppSelector } from '../../../../../redux/typed-hooks';
import {
  selectChancesPL1,
  selectIsNextTurnPL1
} from '../../../../../redux/reducers';
import { drawHeadPL1 } from './drawHeadPL1';
import { drawTankPL1 } from './drawTankPL1';
import { drawOxygen } from '../drawOxygen';
import styles from '../playerCanvas.module.scss';

type Player1CanvasProps = {
  children?: React.ReactNode;
};

export const Player1Canvas = ({ children = null }: Player1CanvasProps) => {
  const canvasHeadRef = useRef<HTMLCanvasElement>(null);
  const canvasTankRef = useRef<HTMLCanvasElement>(null);
  const nextIsPL1 = useAppSelector(selectIsNextTurnPL1);
  const chancesPL1 = useAppSelector(selectChancesPL1);

  useEffect(() => {
    const canvasHead = canvasHeadRef.current;
    const canvasTank = canvasTankRef.current;
    if (!canvasHead || !canvasTank) return;
    const ctxHead = canvasHead.getContext('2d');
    const ctxTank = canvasTank.getContext('2d');
    if (!ctxHead || !ctxTank) return;

    const strokeColor = nextIsPL1 ? '#d15000' : 'grey';

    setTimeout(() => {
      drawHeadPL1(ctxHead, strokeColor);
      drawTankPL1(ctxTank, strokeColor);
      drawOxygen(ctxTank, chancesPL1);
    }, 500);
  }, [nextIsPL1, chancesPL1]);

  let playerClassName = styles.playerCanvas__player;
  if (nextIsPL1) {
    playerClassName = `${playerClassName} ${styles['playerCanvas__player--active']} `;
  }

  return (
    <div className={styles.playerCanvas}>
      <div className={playerClassName}>Player 1</div>
      <div className={styles.playerCanvas__flex}>
        <canvas
          ref={canvasTankRef}
          width='280'
          height='480'
          className={styles.playerCanvas__canvas}
        />
        <div>
          <canvas
            ref={canvasHeadRef}
            width='280'
            height='300'
            className={styles.playerCanvas__canvas}
          />
          {children && children}
        </div>
      </div>
    </div>
  );
};
