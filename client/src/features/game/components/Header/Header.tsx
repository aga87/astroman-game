import React from 'react';
import styles from './header.module.scss';

type HeaderProps = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__heading}>Astroman </h1>
      {children}
    </header>
  );
};
