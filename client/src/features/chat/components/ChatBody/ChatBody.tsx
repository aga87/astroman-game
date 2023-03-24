import React from 'react';
import styles from './chatBody.module.scss';

export const ChatBody = () => {
  return (
    <div>
      <div className={styles.chatMessagePL1}>
        <div className={styles.chatMessagePL1__sender}>Player 1</div>
        <div className={styles.chatMessagePL1__body}>Hey</div>
      </div>

      <div className={styles.chatMessagePL2}>
        <div className={styles.chatMessagePL2__sender}>Player 2</div>
        <div className={styles.chatMessagePL2__body}>Hey, good luck</div>
      </div>
    </div>
  );
};
