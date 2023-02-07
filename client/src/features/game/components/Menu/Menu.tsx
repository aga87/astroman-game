import React, { useRef } from 'react';
import { useAppDispatch } from '../../../../redux/typed-hooks';
import { openGameOptionsModal } from '../../redux/reducers/gameUI';
import { Button } from '../../../../components';
import menuSound from '../../audio/menu.mp3';

export const Menu = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const audio = audioRef.current;
    audio?.play();
    dispatch(openGameOptionsModal());
  };

  return (
    <nav>
      <Button variant='primary' text='Options' handleClick={handleClick} />
      <audio src={menuSound} ref={audioRef} />
    </nav>
  );
};
