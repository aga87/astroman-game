import React, { useRef } from 'react';
import { useAppDispatch } from '../../../../redux/typed-hooks';
import { openGameOptionsModal } from '../../redux/reducers/gameUI';
import { Button } from '../../../../components';
import { LeaveRoom } from '../../../rooms/components';
import { ChatToggle } from '../../../chat/components';
import menuSound from '../../audio/menu.mp3';
import styles from './menu.module.scss';

export const Menu = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const audio = audioRef.current;
    audio?.play();
    dispatch(openGameOptionsModal());
  };

  return (
    <nav className={styles.menu}>
      <div>
        <Button variant='primary' text='Options' handleClick={handleClick} />
        <audio src={menuSound} ref={audioRef} />
      </div>
      <div>
        <div className={styles.menu__room}>
          <LeaveRoom />
        </div>
        <div className={styles.menu__chat}>
          <ChatToggle />
        </div>
      </div>
    </nav>
  );
};
