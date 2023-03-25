import React, { useEffect, useRef } from 'react';
import { useAppSelector } from '../../../../redux/typed-hooks';
import { selectMessages } from '../../../../redux/reducers';
import styles from './chatBody.module.scss';

export const ChatBody = () => {
  const messages = useAppSelector(selectMessages);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div>
      {messages.map(message => {
        const { body, sender } = message;
        if (sender === 'Player 1')
          return (
            <div className={styles.chatMessagePL1}>
              <div className={styles.chatMessagePL1__sender}>{sender}</div>
              <div className={styles.chatMessagePL1__body}>{body}</div>
            </div>
          );
        return (
          <div className={styles.chatMessagePL2}>
            <div className={styles.chatMessagePL2__sender}>{sender}</div>
            <div className={styles.chatMessagePL2__body}>{body}</div>
          </div>
        );
      })}
      <div ref={lastMessageRef} />
    </div>
  );
};
