import React, { useRef } from 'react';
import { Button } from '../../../../components';
import menuSound from '../../audio/menu.mp3';

export const QuitBtn = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    const audio = audioRef.current;
    audio?.play();
    // dispatch(quitGame());
  };

  return (
    <>
      <Button variant='tertiary' text='Quit Game' handleClick={handleClick} />
      <audio src={menuSound} ref={audioRef} />
    </>
  );
};
