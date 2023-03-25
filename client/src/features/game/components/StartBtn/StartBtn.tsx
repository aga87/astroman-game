import React, { useRef } from 'react';
import { socket } from '../../../../socket';
import { useAppDispatch, useAppSelector } from '../../../../redux/typed-hooks';
import { selectIsRoundOver, selectRoom } from '../../../../redux/reducers';
import { startLevel } from '../../redux/reducers/game';
import { Button } from '../../../../components';
import startSound from './start.mp3';
import { getRandomBook } from '../../utils';

export const StartBtn = () => {
  const room = useAppSelector(selectRoom);
  const isDisabled = !useAppSelector(selectIsRoundOver);
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const randomBook = getRandomBook();
    dispatch(startLevel(randomBook));
    socket.emit('start_game', { room, randomBook });
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
