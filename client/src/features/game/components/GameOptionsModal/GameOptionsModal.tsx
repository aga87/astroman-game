import React, { useId, useRef } from 'react';
import { useAppDispatch } from '../../../../redux/typed-hooks';
import { closeGameOptionsModal } from '../../redux/reducers/gameUI';
import { Button, Star } from '../../../../components';
import { useScrollFreeze } from './useScrollFreeze';
import menuSound from '../../audio/menu.mp3';
import styles from './gameOptionsModal.module.scss';

type GameOptionsModalProps = {
  children: React.ReactNode;
};

export const GameOptionsModal = ({ children }: GameOptionsModalProps) => {
  const headingId = useId();
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const audio = audioRef.current;
    audio?.play();
    dispatch(closeGameOptionsModal());
  };

  // Freeze background scroll when modal is open
  useScrollFreeze();

  return (
    <div
      className={styles.modal}
      role='dialog'
      aria-modal
      aria-labelledby={headingId}
    >
      <div className={styles.modal__inner}>
        <h1 className={styles.modal__heading} id={headingId}>
          OPTIONS
        </h1>
        <div>
          <Star /> <Star /> <Star />
        </div>
        {children}
        <Button variant='tertiary' text='Back' handleClick={handleClick} />
        <audio src={menuSound} ref={audioRef} />
        <div>
          <Star /> <Star /> <Star />
        </div>
      </div>
    </div>
  );
};
