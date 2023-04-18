import React, { useRef } from 'react';
import { socket } from '../../../../../socket';
import {
  useAppDispatch,
  useAppSelector
} from '../../../../../redux/typed-hooks';
import { leaveRoom } from '../../../../rooms/redux/roomSlice';
import { selectRoom } from '../../../../rooms/redux/roomSelectors';
import { resetGame } from '../../../redux/gameSlice';
import { selectWinner } from '../../../redux/gameSelectors';
import { Modal } from '../Modal';
import { Button } from '../../../../../components';
import menuSound from '../../../audio/menu.mp3';

export const GameOverModal = () => {
  const room = useAppSelector(selectRoom);
  const audioRef = useRef<HTMLAudioElement>(null);
  const winner = useAppSelector(selectWinner);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const audio = audioRef.current;
    audio?.play();
  };

  const handlePlayAgainClick = () => {
    handleClick();
    dispatch(resetGame());
    socket.emit('reset_game', room);
  };

  const handleQuitGameClick = () => {
    handleClick();
    dispatch(resetGame());
    socket.emit('reset_game', room);
    dispatch(leaveRoom());
    socket.emit('leave_room', room);
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
