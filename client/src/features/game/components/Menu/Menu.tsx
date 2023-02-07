import React, { useRef } from 'react';
import { Button } from '../../../../components';
import menuSound from './menu.mp3';

export const Menu = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    const audio = audioRef.current;
    audio?.play();
    // dispatch(openOptions());
  };

  return (
    <nav>
      <Button variant='primary' text='Options' handleClick={handleClick} />
      <audio src={menuSound} ref={audioRef} />
    </nav>
  );
};
