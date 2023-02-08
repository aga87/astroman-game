import React, { useRef } from 'react';
import { Button } from '../../../../components';
import startSound from './start.mp3';

export const StartBtn = () => {
  //   const isDisabled = !useAppSelector(selectIsRoundOver);
  const isDisabled = false;
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    // dispatch(startLevel());
    const audio = audioRef.current;
    audio?.play();
  };

  return (
    <div>
      <Button
        variant='animated'
        text='Start'
        handleClick={handleClick}
        isDisabled={isDisabled}
      />
      <audio src={startSound} ref={audioRef} />
    </div>
  );
};
