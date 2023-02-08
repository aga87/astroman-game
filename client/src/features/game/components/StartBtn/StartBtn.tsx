import React, { useRef } from 'react';
import { useAppSelector } from '../../../../redux/typed-hooks';
import { selectIsRoundOver } from '../../../../redux/reducers';
import { Button } from '../../../../components';
import startSound from './start.mp3';

export const StartBtn = () => {
  const isDisabled = !useAppSelector(selectIsRoundOver);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    // dispatch(startLevel(getRandomBook()));
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
