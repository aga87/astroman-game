import React from 'react';
import { useAppDispatch } from '../../../../redux/typed-hooks';
import { toggleChat } from '../../redux/reducers/chatUI';
import chatIcon from './chat-64.png';
import styles from './chatToggle.module.scss';

export const ChatToggle = () => {
  const dispatch = useAppDispatch();

  const openChatRoom = () => {
    dispatch(toggleChat());
  };

  return (
    <button
      type='button'
      onClick={openChatRoom}
      className={styles.chatToggleButton}
    >
      <img
        src={chatIcon}
        alt='chatIcon'
        className={styles.chatToggleButton__icon}
      />
    </button>
  );
};
