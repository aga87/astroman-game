import React from 'react';
import { useAppSelector } from '../../../../redux/typed-hooks';
import { selectPointsPL2 } from '../../redux/gameSelectors';
import { Star } from '../../../../components';
import styles from './player2Points.module.scss';

export const Player2Points = () => {
  const pointsPL2 = useAppSelector(selectPointsPL2);

  return (
    <div className={styles.points}>
      {pointsPL2}
      <span className={styles.points__star}>
        <Star size='large' />
      </span>
    </div>
  );
};
