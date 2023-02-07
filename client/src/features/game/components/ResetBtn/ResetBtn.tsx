import React, { useRef } from 'react';
import { Button } from '../../../../components';
import menuSound from '../../audio/menu.mp3';

export const ResetBtn = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    const audio = audioRef.current;
    audio?.play();
    // dispatch(resetGame());
  };

  return (
    <>
      <Button variant='tertiary' text='Reset Game' handleClick={handleClick} />
      <audio src={menuSound} ref={audioRef} />
    </>
  );
};
