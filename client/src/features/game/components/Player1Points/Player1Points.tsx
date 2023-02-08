import React from 'react';
import { useAppSelector } from '../../../../redux/typed-hooks';
import { selectPointsPL1 } from '../../../../redux/reducers';
import { Star } from '../../../../components';
import styles from './player1Points.module.scss';

export const Player1Points = () => {
  const pointsPL1 = useAppSelector(selectPointsPL1);

  return (
    <div className={styles.points}>
      <span className={styles.points__star}>
        <Star size='large' />
      </span>
      {pointsPL1}
    </div>
  );
};
