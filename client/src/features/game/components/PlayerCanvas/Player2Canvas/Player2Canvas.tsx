import React, { useRef, useEffect } from 'react';
import { drawHeadPL2 } from './drawHeadPL2';
import { drawTankPL2 } from './drawTankPL2';
import { drawOxygen } from '../drawOxygen';
import styles from '../playerCanvas.module.scss';

type Player2CanvasProps = {
  children?: React.ReactNode;
};

export const Player2Canvas = ({ children = null }: Player2CanvasProps) => {
  const canvasHeadRef = useRef<HTMLCanvasElement>(null);
  const canvasTankRef = useRef<HTMLCanvasElement>(null);
  // const nextIsPL2 = !useAppSelector(selectNextTurnIsPL1);
  // const chancesPL2 = useAppSelector(selectChancesPL2);
  const nextIsPL2 = false;
  const chancesPL2 = 4;

  useEffect(() => {
    const canvasHead = canvasHeadRef.current;
    const canvasTank = canvasTankRef.current;
    if (!canvasHead || !canvasTank) return;
    const ctxHead = canvasHead.getContext('2d');
    const ctxTank = canvasTank.getContext('2d');
    if (!ctxHead || !ctxTank) return;

    const strokeColor = nextIsPL2 ? '#d15000' : 'grey';

    setTimeout(() => {
      drawHeadPL2(ctxHead, strokeColor);
      drawTankPL2(ctxTank, strokeColor);
      drawOxygen(ctxTank, chancesPL2);
    }, 500);
  }, [nextIsPL2, chancesPL2]);

  let playerClassName = styles.playerCanvas__player;
  if (nextIsPL2) {
    playerClassName = `${playerClassName} ${styles['playerCanvas__player--active']} `;
  }

  return (
    <div className={styles.playerCanvas}>
      <div className={playerClassName}>Player 2</div>
      <div className={styles.playerCanvas__flex}>
        <div>
          <canvas
            ref={canvasHeadRef}
            width='280'
            height='300'
            className={styles.playerCanvas__canvas}
          />
          {children && children}
        </div>
        <canvas
          ref={canvasTankRef}
          width='280'
          height='480'
          className={styles.playerCanvas__canvas}
        />
      </div>
    </div>
  );
};
