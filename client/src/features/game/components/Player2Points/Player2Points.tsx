import React from 'react';
import { Star } from '../../../../components';
import styles from './player2Points.module.scss';

export const Player2Points = () => {
  // const pointsPL2 = useAppSelector(selectPointsPL1);
  const pointsPL2 = 0;
  return (
    <div className={styles.points}>
      {pointsPL2}
      <span className={styles.points__star}>
        <Star />
      </span>
    </div>
  );
};
