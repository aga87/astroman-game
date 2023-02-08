import React, { useRef } from 'react';
import {
  useAppDispatch,
  useAppSelector
} from '../../../../../redux/typed-hooks';
import { leaveRoom } from '../../../../rooms/redux/reducers/room';
import { selectWinner } from '../../../../../redux/reducers';
import { Modal } from '../Modal';
import { Button } from '../../../../../components';
import menuSound from '../../../audio/menu.mp3';

export const GameOverModal = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const winner = useAppSelector(selectWinner);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const audio = audioRef.current;
    audio?.play();
  };

  const handlePlayAgainClick = () => {
    handleClick();
    // dispatch(resetGame());
  };

  const handleQuitGameClick = () => {
    handleClick();
    // dispatch(resetGame());
    dispatch(leaveRoom());
  };

  return (
    <Modal title='GAME OVER'>
      <p>{winner}</p>
      <Button
        variant='tertiary'
        text='Play Again'
        handleClick={handlePlayAgainClick}
      />
      <Button
        variant='tertiary'
        text='Quit Game'
        handleClick={handleQuitGameClick}
      />
      <audio src={menuSound} ref={audioRef} />
    </Modal>
  );
};
