import React from 'react';
import { useAppSelector } from '../../../../redux/typed-hooks';
import { selectRoundProgress } from '../../redux/gameSelectors';
import styles from './roundProgress.module.scss';

export const RoundProgress = () => {
  const progress = useAppSelector(selectRoundProgress);

  return (
    <div className={styles.roundProgress}>
      {progress.length > 0
        ? progress
        : 'MISSION: REVEAL THE TITLES OF SCI-FI MASTERWORKS'}
    </div>
  );
};
