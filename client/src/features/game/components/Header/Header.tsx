import React from 'react';
import { useAppSelector } from '../../../../redux/typed-hooks';
import { selectRoom } from '../../../../redux/reducers';
import styles from './header.module.scss';

export const Header = () => {
  const room = useAppSelector(selectRoom);

  return (
    <header className={styles.header}>
      <h1 className={styles.header__heading}>Astroman</h1>
      <div>Room {room}</div>
    </header>
  );
};
