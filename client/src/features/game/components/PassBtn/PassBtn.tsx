import React, { useRef } from 'react';
import { useAppSelector } from '../../../../redux/typed-hooks';
import { selectIsPassAllowed } from '../../../../redux/reducers';
import { Button } from '../../../../components';
import passSound from './pass.mp3';

export const PassBtn = () => {
  const isDisabled = !useAppSelector(selectIsPassAllowed);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    const audio = audioRef.current;
    audio?.play();
    // dispatch(passTurn());
  };

  return (
    <div>
      <Button
        variant='primary'
        text='Pass'
        handleClick={handleClick}
        isDisabled={isDisabled}
      />
      <audio src={passSound} ref={audioRef} />
    </div>
  );
};
