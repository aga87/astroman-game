import React, { useRef } from 'react';
import { socket } from '../../../../../socket';
import {
  useAppDispatch,
  useAppSelector
} from '../../../../../redux/typed-hooks';
import { selectRoom } from '../../../../../redux/reducers';
import { closeGameOptionsModal } from '../../../redux/reducers/gameUI';
import { resetGame } from '../../../redux/reducers/game';
import { leaveRoom } from '../../../../rooms/redux/reducers/room';
import { Modal } from '../Modal';
import { Button } from '../../../../../components';
import menuSound from '../../../audio/menu.mp3';

export const GameOptionsModal = () => {
  const room = useAppSelector(selectRoom);
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const audio = audioRef.current;
    audio?.play();
  };

  const handleResetGameClick = () => {
    handleClick();
    dispatch(resetGame());
    socket.emit('reset_game', room);
    dispatch(closeGameOptionsModal());
  };

  const handleQuitGameClick = () => {
    handleClick();
    dispatch(resetGame());
    socket.emit('reset_game', room);
    dispatch(leaveRoom());
    socket.emit('leave_room', room);
    dispatch(closeGameOptionsModal());
  };

  const handleBackClick = () => {
    handleClick();
    dispatch(closeGameOptionsModal());
  };

  return (
    <Modal title='OPTIONS'>
      <Button
        variant='tertiary'
        text='Reset Game'
        handleClick={handleResetGameClick}
      />
      <Button
        variant='tertiary'
        text='Quit Game'
        handleClick={handleQuitGameClick}
      />
      <Button variant='tertiary' text='Back' handleClick={handleBackClick} />
      <audio src={menuSound} ref={audioRef} />
    </Modal>
  );
};
