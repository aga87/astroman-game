import React, { useRef } from 'react';
import { socket } from '../../../../socket';
import { useAppDispatch, useAppSelector } from '../../../../redux/typed-hooks';
import { selectRoom } from '../../../rooms/redux/roomSelectors';
import { makeMove } from '../../redux/gameSlice';
import { selectAvailLetters } from '../../redux/gameSelectors';
import { Button } from '../../../../components';
import { alphabet } from '../../utils';
import guessSound from './guess.mp3';
import styles from './letters.module.scss';

export const Letters = () => {
  const room = useAppSelector(selectRoom);
  const availableLetters = useAppSelector(selectAvailLetters);
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();

  const letterListItems = alphabet.map(letter => {
    const isDisabled = !availableLetters.includes(
      letter.toLowerCase() as Letter
    );

    const handleClick = () => {
      dispatch(makeMove(letter.toLowerCase() as Letter));
      socket.emit('make_move', { room, letter: letter.toLowerCase() });
      const audio = audioRef.current;
      audio?.play();
    };

    return (
      <li key={letter.toLowerCase()} className={styles.letters__item}>
        <Button
          variant='secondary'
          text={letter}
          handleClick={handleClick}
          isDisabled={isDisabled}
        />
      </li>
    );
  });

  return (
    <>
      <ul className={styles.letters}>{letterListItems}</ul>{' '}
      <audio src={guessSound} ref={audioRef} />
    </>
  );
};
