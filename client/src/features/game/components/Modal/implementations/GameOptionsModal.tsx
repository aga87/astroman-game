import React, { useRef } from 'react';
import { useAppDispatch } from '../../../../../redux/typed-hooks';
import { closeGameOptionsModal } from '../../../redux/reducers/gameUI';
import { resetGame } from '../../../redux/reducers/game';
import { leaveRoom } from '../../../../rooms/redux/reducers/room';
import { Modal } from '../Modal';
import { Button } from '../../../../../components';
import menuSound from '../../../audio/menu.mp3';

export const GameOptionsModal = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const audio = audioRef.current;
    audio?.play();
  };

  const handleResetGameClick = () => {
    handleClick();
    dispatch(resetGame());
  };

  const handleQuitGameClick = () => {
    handleClick();
    dispatch(resetGame());
    dispatch(leaveRoom());
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
