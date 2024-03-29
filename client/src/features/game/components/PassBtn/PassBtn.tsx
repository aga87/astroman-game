import React, { useRef } from 'react';
import { socket } from '../../../../socket';
import { useAppDispatch, useAppSelector } from '../../../../redux/typed-hooks';
import { selectRoom } from '../../../rooms/redux/roomSelectors';
import { selectIsPassAllowed } from '../../redux/gameSelectors';
import { passTurn } from '../../redux/gameSlice';
import { Button } from '../../../../components';
import passSound from './pass.mp3';

export const PassBtn = () => {
  const room = useAppSelector(selectRoom);
  const isDisabled = !useAppSelector(selectIsPassAllowed);
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const audio = audioRef.current;
    audio?.play();
    dispatch(passTurn());
    socket.emit('pass_turn', room);
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
