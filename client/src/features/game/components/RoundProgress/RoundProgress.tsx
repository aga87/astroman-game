import React from 'react';
import styles from './roundProgress.module.scss';

export const RoundProgress = () => {
  // const progress = useAppSelector(selectRoundProgress);
  const progress = 'MISSION: REVEAL THE TITLES OF SCI-FI MASTERWORKS';

  return <div className={styles.roundProgress}>{progress}</div>;
};
