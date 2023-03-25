import React from 'react';
import { ChatBody, ChatFooter } from './components';
import styles from './chat.module.scss';

export const Chat = () => {
  return (
    <div className={styles.chat}>
      <ChatBody />
      <ChatFooter />
    </div>
  );
};
