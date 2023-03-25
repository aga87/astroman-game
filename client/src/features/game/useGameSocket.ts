import { Socket } from 'socket.io-client';
import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/typed-hooks';
import {
  makeMove,
  passTurn,
  resetGame,
  startLevel
} from './redux/reducers/game';

export const useGameSocket = (socket: Socket) => {
  const dispatch = useAppDispatch();

  // Start game
  useEffect(() => {
    socket.on('player_started_game', randomBook => {
      dispatch(startLevel(randomBook));
    });

    return () => {
      socket.off('player_started_game');
    };
  }, [dispatch, socket]);

  // Make move
  useEffect(() => {
    socket.on('player_made_move', letter => {
      dispatch(makeMove(letter));
    });

    return () => {
      socket.off('player_made_move');
    };
  }, [dispatch, socket]);

  // Pass turn
  useEffect(() => {
    socket.on('player_passed_turn', () => {
      dispatch(passTurn());
    });

    return () => {
      socket.off('player_passed_turn');
    };
  }, [dispatch, socket]);

  // Reset game
  useEffect(() => {
    socket.on('player_reset_game', () => {
      dispatch(resetGame());
    });

    return () => {
      socket.off('player_reset_game');
    };
  }, [dispatch, socket]);
};
